const getItemFromLs = (item) => {
  const retrieveItem = localStorage.getItem(item);
  if (retrieveItem !== null) {
    const item = JSON.parse(retrieveItem);
    return item;
  } else {
    console.log(item, "not found");
  }
};

const addItemToLs = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
  // console.log(item, "added succesfully");
};

const deletItemFromLs = (key) => {
  console.log("deleting", key)
  localStorage.removeItem(key);
};

const clearLs = () => localStorage.clear();

export { getItemFromLs, addItemToLs, deletItemFromLs, clearLs };
