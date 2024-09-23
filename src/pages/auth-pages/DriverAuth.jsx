import AuthProcess from "../../components/auth/AuthProcess";
import Heading from "../../components/shared/Heading";
import React, { useEffect } from "react";
import Btn from "../../components/shared/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dispatchables from "../../utils/dispatchables";
import DriverAuthBoard from "../../components/auth/DriverAuthBoard";
import getDriverAuthImageAndTitle from "../../components/auth/headings";

const checkDetails = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order());
    }, 3000);
  });
};

const DriverAuth = () => {
  const navigate = useNavigate();
  const { driverAuthProcessStage } = useSelector((state) => state.global);
  const { changeAuthenticationPage, nextDriverAuthStage } = dispatchables();
  const dispatch = useDispatch();

  useEffect(() => {
    changeAuthenticationPage("driver-auth");
  }, []);

  const titleAndText = getDriverAuthImageAndTitle(driverAuthProcessStage);

  const handleUpdateFiles = () => {
    switch (driverAuthProcessStage) {
      case "Identity":
        return nextDriverAuthStage("Driver License Front");

      case "Driver License Front":
        return nextDriverAuthStage("Driver License Back");

      case "Driver License Back":
        nextDriverAuthStage("Processing");
        setTimeout(() => {
          changeAuthenticationPage("login");
          navigate("/authentication/login");
        }, 3000);
        return;
      default:
        console.log("I am here");
    }
  };

  return (
    <section className="home-pad py-11 w-full">
      <div>
        <div>
          <Heading
            className="text-center"
            title="Driver's license & Document"
          />
          {/* <AuthProcess /> */}
        </div>

        <div className="mt-5 md:mt-20 w-full md:w-[686px] mx-auto">
          <div>
            <DriverAuthBoard titleAndText={titleAndText} driverAuthProcessStage={driverAuthProcessStage} />
            <Heading
              title={titleAndText.title}
            tclass="text-center"
              description={titleAndText.desc}
              dclass="text-center text-2xl text-neutral"
              type="about"
            />
            {driverAuthProcessStage === "Processing" ? null : (
              <div className="w-[343px] mx-auto mt-10">
                <Btn
                  text={
                    driverAuthProcessStage === "Identity"
                      ? "Upload Selfie"
                      : "Upload License"
                  }
                  size="full"
                  handleClick={handleUpdateFiles}
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
