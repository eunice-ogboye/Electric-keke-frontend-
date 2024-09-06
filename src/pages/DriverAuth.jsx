import AuthProcess from "../components/AuthProcess";
import { Heading } from "../components";
import { useGlobalContext } from "../context";
import React, { useEffect } from "react";
import Btn from "../components/Btn";

const getDriverAuthImageAndTitle = (process) => {
  return process === "Identity"
    ? {
        img: "/selfie.svg",
        title: "Take A Selfie of Yourself",
        desc: "your face has to be well lit and well positioned, make sure you don't have any background light.",
      }
    : process === "Driver License Front"
    ? {
        img: "/license-card.svg",
        title: "Driver's License",
        desc: "Upload a clear front picture of your drivers license, showing all corners of the drivers license.",
      }
    : process === "Driver License Back"
    ? {
        img: "/license-card.svg",
        title: "Driver's License",
        desc: "Upload a clear back picture of your drivers license, showing all corners of the drivers license.",
      }
    : {
        title: "Processing",
        desc: "We are reviewing the information you provide to verify your identity. verification process takes 24 hours, a notification will be sent to your email.",
      };
};

const DriverAuth = () => {
  const {
    Dispatch,
    globalState: { driverAuthProcess },
  } = useGlobalContext();
  useEffect(() => {
    Dispatch("changeHomePage", { homePage: "driver-auth" });
  }, []);

  const titleAndText = getDriverAuthImageAndTitle(driverAuthProcess);

  return (
    <section className="home-pad py-11 w-full">
      <div>
        <div>
          <Heading
            className="text-center"
            title="Driver's license & Document"
          />
          <AuthProcess />
        </div>

        <div className="mt-5 md:mt-20 w-full md:w-[686px] mx-auto">
          <div>
            {driverAuthProcess === "Processing" ? null : (
              <div
                className={`border ${
                  driverAuthProcess === "identity"
                    ? "w-full md:w-[392px] h-[450px]"
                    : "w-full md:w-[635px] h-[394px]"
                } mx-auto overflow-hidden`}
              >
                <div className="size-full">
                  <img
                    src={titleAndText.img}
                    alt="selfie"
                    className="size-full"
                  />
                </div>
              </div>
            )}
            <Heading
              title={titleAndText.title}
              tclass="text-center"
              description={titleAndText.desc}
              dclass="text-center text-2xl text-neutral"
              type="about"
            />
            {driverAuthProcess === "Processing" ? null : (
              <div className="w-[343px] mx-auto mt-10">
                <Btn
                  text={
                    driverAuthProcess === "Identity"
                      ? "Upload Selfie"
                      : "Upload License"
                  }
                  size="full"
                  handleClick={() => {
                    switch (driverAuthProcess) {
                      case "Identity":
                        return Dispatch("driverAuth", {
                          driverAuthProcess: "Driver License Front",
                        });
                      case "Driver License Front":
                        return Dispatch("driverAuth", {
                          driverAuthProcess: "Driver License Back",
                        });
                      case "Driver License Back":
                        return Dispatch("driverAuth", {
                          driverAuthProcess: "Processing",
                        });
                      default:
                        console.log("I am here");
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverAuth;
