import aws from 'aws-sdk';


// Configuring our S3 bucket in React
const region = "eu-north-1";
const bucketName = "pro-photos-stored";
const accessKeyId = import.meta.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = import.meta.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});


export default s3;
export {bucketName};
