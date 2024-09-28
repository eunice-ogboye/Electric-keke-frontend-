import { getRandomNumber } from "./getRandomNumber";

export const getAnalytics = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const analysis = {
        analysisDigit: getRandomNumber(1000, 50),
        percent: getRandomNumber(80, 10),
      };
      resolve(analysis);
    }, getRandomNumber(5000, 2000));
  });
};
