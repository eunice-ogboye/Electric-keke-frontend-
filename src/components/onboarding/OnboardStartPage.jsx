import { XIcon } from "lucide-react";
import { clearLs } from "../../utils/ls";
import Overlay from "./Overlay";
import RegisterAs from "./RegisterAs";
import Btn from "../shared/btn/Btn";

const OnboardStartPage = () => {
  return (
    <section className="flex">
      <div className="board__onboarding">
        <Btn
          icon={<XIcon color="black" />}
          href="/"
          onClick={clearLs}
          styling="cancel-btn p-0"
        />

        <Overlay className="overlay" />

        <img src="/hero/registerAs.png" alt="register as" className="image" />
      </div>
      <RegisterAs />
    </section>
  );
};

export default OnboardStartPage;
