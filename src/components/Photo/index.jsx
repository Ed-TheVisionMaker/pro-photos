import {
  S3Client,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { useEffect } from 'react';
import setupS3Client, { accessKeyId, secretAccessKey, bucketName, region } from '../../../awsConfig';

// const client = new setupS3Client()
const client = new S3Client({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

function Photo() {
    return <img src='https://pro-photos-stored.s3.eu-north-1.amazonaws.com/lazy_summer_daze.jpg'/>
};

export default Photo;
