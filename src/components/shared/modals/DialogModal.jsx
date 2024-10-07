import React from "react";
import Heading from "../Heading";
import Choose from "../Choose";

const DialogModal = ({
  title,
  description,
  choice1,
  choice2,
  handleChoice1,
  handleChoice2,
}) => {
  return (
    <>
      <Heading className="text-center" title={title} description={description} />

      <Choose
        choice1txt={choice1}
        choice2txt={choice2}
        btnClass="h-14 rounded-[56px] w-[252px]"
        addedClass1="btn-clear text-black"
        addedClass2="btn-danger"
        containerClass="flex-center gap-x-6 pt-2 tablet:pt-8"
        handleChoice1={handleChoice1}
        handleChoice2={handleChoice2}
      />
    </>
  );
};

export default DialogModal;
