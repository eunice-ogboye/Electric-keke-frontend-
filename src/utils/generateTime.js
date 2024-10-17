const generateTime = () => {
  const time = [];
  for (let startTime = 8; startTime < 19; startTime++) {
    for (let clock = 0; clock < 60; clock += 15) {
      const generatedTime =
        startTime + ":" + (clock < 10 ? clock + "0" : clock);
      time.push(generatedTime);
    }
  }
  return time;
};

export default generateTime;
