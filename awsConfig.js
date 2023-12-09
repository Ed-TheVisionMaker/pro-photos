import { S3Client } from '@aws-sdk/client-s3';

export const region = "eu-north-1";
export const bucketName = "pro-photos-stored";
export const accessKeyId = import.meta.env.VITE_ACCESS_KEY_ID;
export const secretAccessKey = import.meta.env.VITE_SECRET_ACCESS_KEY;

console.log(region, bucketName, accessKeyId, secretAccessKey);

const setupS3Client = new S3Client({
  region,
  accessKeyId,
  secretAccessKey,
  // signatureVersion: 'v4'  
});


export default setupS3Client;
