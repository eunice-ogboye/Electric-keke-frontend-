export const throttling = (callbackFunc) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunc(...args);
    }, 3000);
  };
};

export const throttleAlert = (runAlert, stopAlert, delay = 5000) => {
  let timeout;

  return (msg) => {
    const start = new Date().getTime();
    console.log(start)
    runAlert(msg);
    clearTimeout(timeout);
    console.log('cleared timeout')
    timeout = setTimeout(() => {
      const end = new Date().getTime();
      console.log(end - start);
      stopAlert();
      console.log('finished')
    }, delay);
  };
};
