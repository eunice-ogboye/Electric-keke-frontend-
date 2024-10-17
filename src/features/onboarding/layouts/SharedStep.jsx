import CustomBg from "../components/CustomBg";
import { XIcon } from "lucide-react";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from '@/components/btn/Btn'
import Heading from "@/components/Heading";

const SharedStep = ({
  text,
  headClass,
  headTitle,
  headDesc,
  children,
  prevProcess,
}) => {
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

      <div className="onboarding__page--right relative">
        <div className="w-full">
          <div className="onboarding-head">
            <LogoPlain styling="w-[122px] h-[81.33px] mx-auto" />
            <Heading
              className={headClass}
              title={headTitle}
              description={headDesc}
              tclass="onboarding-head__title"
              dclass="onboarding-desc"
            />
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default SharedStep;
