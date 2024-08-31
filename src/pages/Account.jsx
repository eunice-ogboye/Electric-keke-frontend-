import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { account_types } from "../constants";
import { useState } from "react";
import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import { cn } from "../lib/utils";

const Account = () => {
  useTitle("Account");
  const { dispatch } = useGlobalContext();
  const [type, setType] = useState("Passenger");

  useEffect(() => {
    dispatch({ type: "changeBg", payload: { onboardingType: "main" } });
  }, []);

  return (
    <div className="board-pad w-1/2">
      <p className="text-right font-josefin text-base">
        Already have an account?{" "}
        <Link
          to="/login/in"
          className="text-green-500"
          onClick={() =>
            dispatch({
              type: "changeBg",
              payload: { onboardingType: "login" },
            })
          }
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
              to="/onboarding/register"
              key={item.title}
              onClick={() =>
                dispatch({
                  type: "changeBg",
                  payload: { onboardingType: "register" },
                })
              }
            >
              <div
                className={cn(
                  `flex items-center justify-between max-w-[26.625rem] h-28 rounded-md px-7 py-6 cursor-pointer`,
                  {
                    "bg-pgreenfade border border-pgreen": item.title === type,
                  }
                )}
                onClick={() => setType(item.title)}
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

export default Account;
