import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Experimental = ({ data }) => {
  const [conicGradients, setConicGradients] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [currPie, setCurrPie] = useState(0);

  useEffect(() => {
    const values = Object.values(data);
    const sumTotal = values.reduce((prev, curr) => {
      return prev + curr.cut;
    }, 0);

    setTotalEarnings(sumTotal);

    const cutPercents = values.map((item) => {
      return (item.cut / sumTotal) * 100;
    });

    let startPercent = 0;
    const conicGradientColor = cutPercents.map((item, index) => {
      if (index === 0) {
        let conical = `${values[index].color} ${startPercent}% ${item}%, transparent ${item}% 100%`;
        startPercent += item;
        return conical;
      } else {
        let conical = `transparent 0% ${startPercent}%,${
          values[index].color
        } ${startPercent}% ${startPercent + item}%, transparent ${
          startPercent + item
        }% 100%`;
        startPercent += item;
        return conical;
      }
    });

    setConicGradients(conicGradientColor);
  }, []);
  return (
    <figure className="w-5/12 max-w-[469px] border aspect-square p-5 flex flex-col">
      <figcaption className="text-xl font-bold">Earnings</figcaption>
      <div
        className="w-full aspect-square rounded-full relative isolate"
        style={{
          backgroundImage:
            "radial-gradient(white 50%, #CCCCCC 50% 80%, white 80% 100%)",
        }}
      >
        <div
          className="size-full absolute top-0 left-0 rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(transparent 58%, #1F2253 58% 65%, transparent 65% 100%)",
            zIndex: -100,
          }}
        />

        {conicGradients.map((item, index, arr) => {
          return (
            <motion.div
              initial={{
                rotate: -30,
                opacity: 0,
              }}
              animate={
                currPie === index && {
                  rotate: 0,
                  opacity: 1,
                  transition: { duration: 0.65 },
                }
              }
              onAnimationComplete={() => {
                setCurrPie((prev) => prev + 1);
              }}
              key={index}
              className="w-full rounded-full aspect-square border-4 absolute"
              style={{
                backgroundImage: `conic-gradient(${item})`,
                zIndex: 1 - index,
              }}
            ></motion.div>
          );
        })}

        <div
          className="size-full absolute top-0 left-0 rounded-full flex-center"
          style={{
            backgroundImage: `radial-gradient(white 0 50%, #CCCCCC 50% 53%, transparent 53% 67%, #CCCCCC 67% 100%)`,
            zIndex: 100,
          }}
        >
          <div className="text-center">
            <p className="text-2xl text-orange-400 font-extrabold">
              NGN
              <CountUp end={totalEarnings} start={0} duration={10} />
            </p>
            <p>Total Earnings</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Experimental;
