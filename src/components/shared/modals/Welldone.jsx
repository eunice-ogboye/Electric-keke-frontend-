import Congrats from "@/assets/svg/Congrats";
import React from "react";
import Heading from "../Heading";
import Btn from "../btn/Btn";

const Welldone = ({closeModal}) => {
  return (
    <>
      <div className="pt-12 px-9 pb-8">
        <div className="mx-auto size-20">
          <Congrats />
        </div>
        <Heading
          title="Welldone!"
          className="text-center"
          description="You have succesfully updated your profile"
        />
      </div>

      <div className="h-[136px] flex-center pt-8 px-9 pb-12">
        <Btn text="Back" styling="btn btn--lg btn--primary w-full" onClick={closeModal} />
      </div>
    </>
  );
};

export default Welldone;
