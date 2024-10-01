import React from "react";

const ProcessIndicator = ({ text, process, condition }) => {
  console.log(condition)
  return (
    <div className="process process--shadow">
      <div className={`process__display ${condition && "process--active"}`}>
        <p className="process__current">{text}</p>
      </div>

      <div className="process__tag">
        <p className="process__text">{process}</p>
      </div>
    </div>
  );
};

export default ProcessIndicator;
