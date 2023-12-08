import { S3 } from '@aws-sdk/client-s3';

const region = "eu-north-1";
const bucketName = "pro-photos-stored";
const accessKeyId = import.meta.env.VITE_ACCESS_KEY_ID;
const secretAccessKey = import.meta.env.VITE_SECRET_ACCESS_KEY;

console.log(region, bucketName, accessKeyId, secretAccessKey);

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});


export default s3;
export {bucketName, region};
