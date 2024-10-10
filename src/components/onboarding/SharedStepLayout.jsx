import CustomBg from "./CustomBg";
import { XIcon } from "lucide-react";
import Btn from "../shared/btn/Btn";

const SharedStepLayout = ({ text, children, prevProcess }) => {
  return (
    <section className="flex items-start h-screen overflow-y-scroll">
      <div className="board__onboarding">
        <Btn
          icon={<XIcon color="black" />}
          onClick={prevProcess}
          styling="cancel-btn p-0"
        />
        <CustomBg text={text} />
      </div>
      {children}
    </section>
  );
};

export default SharedStepLayout;
