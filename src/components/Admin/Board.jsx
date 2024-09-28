import { getAnalytics } from "../../utils/getAnalytics";
import { useResource } from "../../hooks/useResource";
// import React, { useEffect } from "react";
import CountUp from "react-countup";

const Board = ({ title, icon, analysisDigits, percent }) => {
  const resource = useResource(getAnalytics()) || {};

  return (
    <div className="border p-5 rounded-[12px] bg-white">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-silver">{title}</p>
        <div
          className="size-10 rounded-full flex-center bg-eco-white"
          style={{
            filter:
              "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.09))",
          }}
        >
          <img src={icon} alt={title} />
        </div>
      </div>

      {resource && (
        <div className="mt-6">
          <h2 className="text-5xl font-extrabold">
            <CountUp end={resource.analysisDigits} start={0} duration={5} />
          </h2>
          <p className="text-xs">
            <span className="text-eco-green">+{resource.percent}%</span> from last month
          </p>
        </div>
      )}
    </div>
  );
};

export default Board;
