import React from "react";
import CustomBg from "./CustomBg";
import CustomizedBtn from "../shared/CustomizedBtn";
import { XIcon } from "lucide-react";
import { clearLs } from "../../utils/ls";

const SharedStepLayout = ({ text, children }) => {
  return (
    <section className="flex items-start h-screen overflow-y-scroll">
      <div className="board__onboarding">
        <CustomizedBtn
          href="/"
          icon={<XIcon color="black" />}
          handleClick={() => clearLs()}
          className="cancel-btn p-0"
        />
        <CustomBg text={text} />
      </div>
      {children}
    </section>
  );
};

export default SharedStepLayout;
