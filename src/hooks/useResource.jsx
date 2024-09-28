import { useState, useEffect } from "react";

export const useResource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getResourceFunc();
        setResource(response);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  return resource;
};
