// for now is a promis

const make_payment = (pay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pay());
    }, 10000);
  });
};

export { make_payment };
