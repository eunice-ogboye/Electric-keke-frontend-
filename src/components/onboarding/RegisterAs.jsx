import { account_types } from "../../constants";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import RegularList from "../shared/RegularList";
import RegisterAsLink from "./RegisterAsLink";
import { addItemToLs } from "../../utils/ls";

const RegisterAs = () => {
  const goToLoginPage = () => {
    addItemToLs('onboarding-process', 0)
    addItemToLs("registeringAs", "Login");
  };
  return (
    <div className="board__register">
      <p className="text-right font-josefin text-base">
        Already have an account?{" "}
        <Link
          to="/onboarding/registration"
          className="text-green-500"
          onClick={goToLoginPage}
        >
          Log in
        </Link>
      </p>

      <div className="mt-[10.5rem]">
        <Heading
          title="Join Us!"
          description="To begin, select your kind of account"
        />

        <div className="mt-10 flex flex-col gap-y-6">
          <RegularList
            itemsToDisplay={account_types}
            resourceName="link"
            itemComponent={RegisterAsLink}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;
