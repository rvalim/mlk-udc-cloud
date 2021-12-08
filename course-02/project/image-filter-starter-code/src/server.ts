import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());


  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  app.get("/filteredimage", async (req, res) => {
    const { image_url } = req.query;

    if (!image_url) {
      res.status(400).send({ message: '"image_url" is require.' });
    }

    try
    {
      const local_url = await filterImageFromURL(image_url)
      res
        .status(200)
        .sendFile(local_url, (err) => {
          if (err) res.status(400).send({ message: err });
          deleteLocalFiles([local_url]);
        });
    }
    catch(err){
      res
        .status(400)
        .send({
          message: `Error while processing image, check your 'image_url' ${image_url}.`
        });
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });


  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();