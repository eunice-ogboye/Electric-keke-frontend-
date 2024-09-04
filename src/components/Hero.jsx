import { useState } from "react";
import { hero_description, support_links } from "../constants";
import { useGlobalContext } from "../context";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import Togglers from "./Togglers";

const HeroCta = () => {
  const navigate = useNavigate();
  const {
    globalState: { homePage, support },
    Dispatch,
  } = useGlobalContext();

  const [supportType, setSupportType] = useState("General");

  const setModalWithAction = (content) => {
    Dispatch("modalContent", { modalContent: content });
  };

  const setSupport = (key) => {
    Dispatch("support", { support: key });
  };

  return (
    <div className="flex-center gap-2 mt-6">
      {homePage === "main" || homePage === "earn" ? (
        <>
          <Btn
            text={homePage === "main" ? "Book a Ride" : "Register"}
            handleClick={() => {
              if (homePage === "earn") {
                Dispatch("changeHomePage", { homePage: "driver-auth" });
                return navigate("/authentication/driver-auth");
              }
              setModalWithAction("ride");
            }}
          />
          {homePage === "main" && (
            <Btn
              text="Request For Delivery"
              type="secondary"
              handleClick={() => {
                setModalWithAction("delivery");
              }}
            />
          )}
        </>
      ) : (
        <div>
          <Togglers
            text1="Faq"
            text2="Contact Us"
            isConditionTrue={support === "faq"}
            handleClick1={() => setSupport("faq")}
            handleClick2={() => setSupport("contact")}
            color="color1"
          />

          <div className="space-x-11 mt-6">
            {support_links.map((item) => {
              return (
                <Btn
                  key={item}
                  text={item}
                  size="sm"
                  type={supportType === item ? "default" : "rider"}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <div className="hero">
      <div className="hero-board">
        <div
          className={`${
            homePage === "main"
              ? "pt-[234px] max-w-[1169px]"
              : homePage === "earn"
              ? "pt-[231px] max-w-[1193px]"
              : "pt-[248px] max-w-[1109px]"
          }  mx-auto pb-[146px]`}
        >
          {homePage === "main" ? (
            <h1 className="hero-title">
              Eco-Friendly{" "}
              <div className="relative inline-block ">
                <img
                  src="/circle-out.svg"
                  alt="circle"
                  className="absolute size-full scale-125"
                />
                <span className="text-eco-green">Rides</span>
              </div>{" "}
              & Swift <span className="text-eco-green">Deliveries</span> at Your
              Fingertips
            </h1>
          ) : homePage === "earn" ? (
            <h1 className="hero-title max-w-[1076px] mx-auto">
              Drive Green, Earn More Join the <br />
              Eco-Ride Team Today
            </h1>
          ) : (
            <h1 className="hero-title">Help & Support Center</h1>
          )}

          <div className={`${homePage === "main" && "px-[30px]"} mt-6`}>
            <p className="hero-description">{hero_description[homePage]}</p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src={
            homePage === "main"
              ? "/hero_bg1.png"
              : homePage === "earn"
              ? "/earn_hero_bg.png"
              : "/support_bg.png"
          }
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
