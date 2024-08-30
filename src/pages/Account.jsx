import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { account_types } from "../constants";
import { useState } from "react";
import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Account = () => {
  useTitle("Account");
  const { dispatch } = useGlobalContext();
  const [type, setType] = useState("Passenger");

  useEffect(() => {
    dispatch({ type: "changeBg", payload: { onboardingType: "main" } });
  }, []);

  return (
    <div className="py-5 px-20 w-1/2">
      <p className="border text-right">
        Already have an account? <Link className="text-green-500">Log in</Link>
      </p>

      <div className="mt-20">
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
                className={`flex items-center justify-between h-28 rounded-md px-7 py-6 cursor-pointer ${
                  item.title === type &&
                  "bg-green-200/30 border border-green-300"
                }`}
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
