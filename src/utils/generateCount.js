const generateCount = () => {
  const count = [];
  for (let startCount = 0; startCount < 120; startCount++) {
    count.push(startCount.toString());
  }
  return count;
};

export default generateCount;
