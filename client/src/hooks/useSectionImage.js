import { useEffect, useState } from 'react';

const useSectionImage = (path) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/sections/${path}`);
        setImage(response.default);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [path]);

  return {
    loading,
    error,
    image,
  };
};

export default useSectionImage;
