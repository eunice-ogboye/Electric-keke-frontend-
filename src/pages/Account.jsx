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
  const { Dispatch } = useGlobalContext();
  const [type, setType] = useState("Passenger");

  useEffect(() => {
    Dispatch("changeHomePage", { homePage: "main" });
  }, []);

  return (
    <div className="board-pad w-full my-dell:w-1/2">
      <p className="text-right font-josefin text-base">
        Already have an account?{" "}
        <Link
          to="/authentication/login"
          className="text-green-500"
          onClick={() => {
            Dispatch("changeHomePage", { homePage: "login" });
          }}
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
                if (item.title === "Passenger") {
                  Dispatch("changeHomePage", { homePage: "register" });
                }
                return;
              }}
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
