const getValuesFromObject = (obj) => {
  return Object.values(obj);
};

const getTotal = (data) => {
  const total = data.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return total;
};
