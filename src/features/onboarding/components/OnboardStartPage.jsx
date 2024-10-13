import { XIcon } from "lucide-react";
import { clearLs } from "@/utils/ls";
import RegisterAs from "./RegisterAs";
import Btn from "@/components/btn/Btn";
import Overlay from "@/components/Overlay";

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

        <Overlay className="overlay" logo />

        <img src="/hero/registerAs.png" alt="register as" className="image" />
      </div>
      <RegisterAs />
    </section>
  );
};

export default OnboardStartPage;
