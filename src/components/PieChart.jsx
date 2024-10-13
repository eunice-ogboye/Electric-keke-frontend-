import React from "react";
import CountUp from "react-countup";

const PieChart = ({ data }) => {
  const values = Object.values(data);
  const lengthOfValue = values.length;
  const totalSumOfValues = values.reduce((prev, current) => {
    return prev + current.digit;
  }, 0);

  console.log(totalSumOfValues);
  let start = 0;

  let displaySection = "conic-gradient(";
  values.forEach((item, index) => {
    const isLastIndex = index === lengthOfValue - 1;
    const percent = Math.floor((item.digit / totalSumOfValues) * 100);
    displaySection += `${values[index].color} ${start}% ${percent}%`;
    start = percent;
    if (isLastIndex) {
      displaySection += ")";
    } else {
      displaySection += ",";
    }
  });

  return (
    <figure className="w-5/12 max-w-[469px] border aspect-square p-5 flex flex-col">
      <figcaption className="text-xl font-bold">Earnings</figcaption>
      <div
        className="w-full aspect-square rounded-full relative"
        style={{
          backgroundImage:
            "radial-gradient(white 50%, #CCCCCC40 50% 80%, white 80% 100%)",
        }}
      >
        <div
          className="size-full absolute top-0 left-0 rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(transparent 55%, #1F2253 55% 65%, transparent 65% 100%)",
          }}
        />
        <div
          className="size-full absolute top-0 left-0 rounded-full flex-center"
          style={{
            backgroundImage: `radial-gradient(white 0 50%, #CCCCCC 50% 53%, transparent 53% 67%, #CCCCCC 67% 100%), ${displaySection}`,
          }}
        >
          <div className="text-center">
            <p className="text-2xl text-orange-400 font-extrabold">
              NGN
              <CountUp end={totalSumOfValues} start={0} duration={10} />
            </p>
            <p>Total Earnings</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default PieChart;
