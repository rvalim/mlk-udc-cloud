
export const config = {
  "dev": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_S3_BUCKET
  },
  // "prod": {
  //   "username": "",
  //   "password": "",
  //   "database": "udagram_prod",
  //   "host": "",
  //   "dialect": "postgres"
  // }
}
