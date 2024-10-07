import React from "react";
import Btn from "./btn/Btn";

const Choose = ({
  containerClass,
  choice1txt,
  choice2txt,
  btnClass,
  addedClass1,
  addedClass2,
  handleChoice1,
  handleChoice2,
  condition,
}) => {
  return (
    <div className={containerClass}>
      <Btn
        text={choice1txt}
        styling={btnClass}
        addedStyles={addedClass1}
        onClick={handleChoice1}
      />
      <Btn
        text={choice2txt}
        styling={btnClass}
        addedStyles={addedClass2}
        onClick={handleChoice2}
      />
    </div>
  );
};

export default Choose;
