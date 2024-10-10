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
  choosing,
}) => {
  return (
    <>
      <Heading
        className="text-center"
        title={title}
        tclass="text-[2rem]"
        description={description}
        dclass="text-eiteen"
      />

      {choosing ? (
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
      ) : (
        <p className="mt-10 text-center">S***************@gmail.com</p>
      )}
    </>
  );
};

export default DialogModal;
