/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';

const useImageUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const uploadImage = async (file: string | Blob): Promise<string | null> => {
    const formData = new FormData();
    formData.append('image', file);

    setIsLoading(true);
    setIsError(false);  // Reset error state before starting the upload
    setErrorMessage(''); // Reset the error message

    try {
      const response = await axios.post(
        'https://api.imgbb.com/1/upload?key=fc42048bab1f3dc822a05f3713669fdd',
        formData,
      );
      if (response.data.success) {
        const link = response.data.data.url;
        setImageLink(link); // Set the image link in the state
        return link;  // Return the image link
      } else {
        throw new Error('Image upload failed.');
      }
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.response ? error.response.data.error.message : error.message);
      return null;  // Return null if there is an error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    imageLink,
    isError,
    errorMessage,
    uploadImage,
  };
};

export default useImageUpload;
