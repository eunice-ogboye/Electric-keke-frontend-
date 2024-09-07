import { useNavigate } from "react-router-dom";
import { support_links } from "../constants";
import { useGlobalContext } from "../context";
import Btn from "./Btn";
import Togglers from "./Togglers";

const HeroCta = ({type}) => {
  const navigate = useNavigate();
  const {
    globalState: { homePage, support, supportOption },
    Dispatch,
  } = useGlobalContext();

  const setModalWithAction = (content) => {
    Dispatch("modalContent", { modalContent: content });
  };

  const setSupport = (key) => {
    Dispatch("support", { support: key });
  };

  return (
    <div className="flex-center gap-2 mt-6">
      {type === "main" || type === "earn" ? (
        <>
          <Btn
            text={type === "main" ? "Book a Ride" : "Register"}
            handleClick={() => {
              if (type === "earn") {
                Dispatch("changeHomePage", { homePage: "driver-auth" });
                return navigate("/authentication/driver-auth");
              }
              setModalWithAction("ride");
            }}
          />
          {type === "main" && (
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
                  type={supportOption === item ? "default" : "rider"}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCta;
