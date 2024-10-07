import CustomBg from "./CustomBg";
import { XIcon } from "lucide-react";
import { clearLs } from "../../utils/ls";
import Btn from "../shared/btn/Btn";

const SharedStepLayout = ({ text, children }) => {
  return (
    <section className="flex items-start h-screen overflow-y-scroll">
      <div className="board__onboarding">
        <Btn
          href="/"
          icon={<XIcon color="black" />}
          onClick={() => clearLs()}
          styling="cancel-btn p-0"
        />
        <CustomBg text={text} />
      </div>
      {children}
    </section>
  );
};

export default SharedStepLayout;
