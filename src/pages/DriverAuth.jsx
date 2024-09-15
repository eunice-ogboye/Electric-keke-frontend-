import AuthProcess from "../components/AuthProcess";
import { Heading } from "../components";
import React, { useEffect } from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthPage, driveAuth } from "../store/slices/global-slice";

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

const checkDetails = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order());
    }, 3000);
  });
};

const DriverAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { driverAuthProcess } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(changeAuthPage("driver-auth"));
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
                  handleClick={async () => {
                    switch (driverAuthProcess) {
                      case "Identity":
                        return dispatch(driveAuth("Driver License Front"));

                      case "Driver License Front":
                        return dispatch(driveAuth("Driver License Back"));

                      case "Driver License Back":
                        dispatch(driveAuth("Processing"));
                        setTimeout(() => {
                          navigate("/authentication/login");
                          dispatch(changeAuthPage("login"));
                        }, 3000);
                        return;
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
