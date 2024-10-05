import { account_types } from "../../constants";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import RegisterAsLink from "./RegisterAsLink";
import { addItemToLs } from "../../utils/ls";
import RegularList from "../shared/_design-pattern/RegularList";

const RegisterAs = () => {
  const goToLoginPage = () => {
    addItemToLs("onboarding-process", 0);
    addItemToLs("registeringAs", "Login");
  };
  return (
    <div className="board__register">
      <p className="board__text mr-[120px]">
        Already have an account?{" "}
        <Link
          to="/onboarding/registration"
          className="text-green-500"
          onClick={goToLoginPage}
        >
          Log in
        </Link>
      </p>

      <div className="h-[92vh] flex-center">
        <div className="w-full md:w-[55%]">
          <Heading
            title="Join Us!"
            description="To begin, select your kind of account"
          />

          <div className="mt-10 flex flex-col gap-y-6">
            <RegularList list={account_types} component={RegisterAsLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;
