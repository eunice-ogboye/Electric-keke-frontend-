import { Link } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import { account_types } from "../../constants";
import { useTitle } from "../../lib/hooks";
import { cn } from "../../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAuthPage,
  changeRegistryMethod,
} from "../../store/slices/global-slice";

const RegisterAs = () => {
  useTitle("RegisterAs");
  // redux globals and  dispatch func
  const dispatch = useDispatch();
  const { registerAs } = useSelector((state) => state.global);

  const registrationMethod = (type) => {
    dispatch(changeRegistryMethod(type));
  };

  return (
    <div className="board-pad w-full md:w-7/12 lg:w-1/2 h-screen">
      <p className="text-right font-josefin text-base">
        Already have an account?{" "}
        <Link
          to="/authentication/login"
          className="text-green-500"
          onClick={() => dispatch(changeAuthPage("login"))}
        >
          Log in
        </Link>
      </p>

      <div className="mt-[10.5rem]">
        <Heading
          title="Join Us!"
          description="To begin, select your kind of account"
        />

        <div className="mt-10 space-y-6">
          {account_types.map((item) => (
            <Link
              to="/authentication/register"
              key={item.title}
              onClick={() => {
                const registeringAs = item.role;
                registrationMethod(registeringAs);
                dispatch(changeAuthPage("register"));
              }}
            >
              <div
                className={`registerAs-opt ${
                  item.role === registerAs && "chosen-role"
                }`}
                onMouseEnter={() => registrationMethod(item.role)}
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </div>

                <div>
                  <img src="/arrow-right.svg" alt="arrow" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;
