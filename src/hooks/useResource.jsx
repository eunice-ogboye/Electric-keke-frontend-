import { useState, useEffect } from "react";

export const useResource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await getResourceFunc();
        setResource(response);
      } catch (error) {
        console.log(error);
      }
    };
  }, [getResourceFunc]);

  return resource;
};
