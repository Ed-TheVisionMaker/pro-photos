import { S3 } from '@aws-sdk/client-s3';
import s3, { bucketName, region } from '../../../awsConfig';
import { useEffect } from 'react';
// Example code to list objects in an S3 bucket using the AWS SDK

// const s3 = new S3();

const listObjects = async () => {
  const params = {
    Bucket: `${bucketName}`,
  };

  try {
    // listObjects.promise() not a function. 
    // const data = await s3.listObjects(params).promise();
    console.log(data, 's3 in list objects');
    const imageUrls = data.Contents.map((object) => {
      return `https://${params.Bucket}.${region}.s3.amazonaws.com/${object.Key}`;
    });
    return imageUrls;
  } catch (error) {
    console.error('Error listing objects in S3:', error);
    return [];
  }
};

function Photo() {
  useEffect(() => {
    console.log('useEffect photo');
    async function fetchImages() {
      const imageUrls = await listObjects();
      // Set imageUrls state
    }

    fetchImages();
  }, []);
  return <div>// JSX to display images</div>;
}

export default Photo;
