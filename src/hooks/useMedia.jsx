import { useState } from "react";

export const useMedia = (query) => {
  const [mediaSmall, setMediaSmall] = useState(
    window.matchMedia(query).matches
  );

  return mediaSmall
};
