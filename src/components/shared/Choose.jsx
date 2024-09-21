import React from "react";
import CustomizedBtn from "./CustomizedBtn";

const Choose = ({
  containerClass,
  choice1txt,
  choice2txt,
  btnClass,
  addedClass1,
  addedClass2,
  handleChoice1,
  handleChoice2,
  condition
}) => {
  
  return (
    <div className={containerClass}>
      <CustomizedBtn
        text={choice1txt || "No, Cancel"}
        className={`${btnClass} ${addedClass1}`}
        handleClick={handleChoice1}
      />
      <CustomizedBtn
        text={choice2txt || "Yes, Delete"}
        className={`${btnClass} ${addedClass2}`}
        handleClick={handleChoice2}
      />
    </div>
  );
};

export default Choose;
