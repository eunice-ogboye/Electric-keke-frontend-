import { XIcon } from "lucide-react";
import CustomizedBtn from "../shared/CustomizedBtn";
import { clearLs } from "../../utils/ls";
import Overlay from "./Overlay";
import RegisterAs from "./RegisterAs";

const OnboardStartPage = () => {
  return (
    <section className="flex">
      <div className="board__onboarding">
        <CustomizedBtn
          href="/"
          icon={<XIcon color="black" />}
          handleClick={() => clearLs()}
          className="cancel-btn p-0"
        />

        <Overlay className="overlay" />

        <img
          src="/hero/registerAs.png"
          alt="register as"
          className="ovelay-img"
        />
      </div>
      <RegisterAs />
    </section>
  );
};

export default OnboardStartPage;
