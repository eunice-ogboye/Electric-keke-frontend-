
const fetchContent = (time, option, contentType, arr1, arr2) => {
  // console.log(contentType);
  // console.log(contentType, option, "............");

  console.log(option)
  return new Promise((resolve) => {
    setTimeout(() => {
      let contents;
      if (option === "All") {
        contentType === "user" ? (contents = arr1) : (contents = arr2);
      } else {
        contentType === "user"
          ? (contents = arr1.filter((item) => item.status === option))
          : (contents = arr2.filter((item) => item.status === option));
      }
      resolve(contents);
    }, time);
  });
};

export default fetchContent;
