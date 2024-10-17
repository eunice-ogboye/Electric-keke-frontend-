const star_size = (mediaSize) => {
  return mediaSize > 0 && mediaSize < 768
    ? 11
    : mediaSize > 769 && mediaSize < 1024
    ? 17
    : 24;
};

export default star_size