import { useNavigate } from "react-router-dom";
import { support_links } from "../../constants";
import Btn from "../shared/Btn";
import Togglers from "../shared/Togglers";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAuthPage,
  changeModalContent,
  chooseSupport,
} from "../../store/slices/global-slice";
import { updateBookingData } from "../../store/slices/bookride-slice";
import dispatchables from "../../utils/dispatchables";

const HeroCta = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {openModalWithContent} = dispatchables();
  // redux dispatch and globals
  const { support, supportOption } = useSelector((state) => state.global);

  const chooseHowToRide = (key, value) => {
    dispatch(updateBookingData({ key, value }));
  };

  // what kind of support
  const whatSupport = (key) => {
    dispatch(chooseSupport(key));
  };

  return (
    <div className="flex-center gap-2 mt-6">
      {type === "main" || type === "earn" ? (
        <>
          <Btn
            text={type === "main" ? "Book a Ride" : "Register"}
            handleClick={() => {
              if (type === "earn") {
                dispatch(changeAuthPage("driver-auth"));
                return navigate("/authentication/driver-auth");
              }
              openModalWithContent("ride");
              chooseHowToRide("booking_type", "ride");
            }}
          />
          {type === "main" && (
            <Btn
              text="Request For Delivery"
              type="secondary"
              handleClick={() => {
                openModalWithContent("delivery");
                chooseHowToRide("booking_type", "delivery");
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
            handleClick1={() => whatSupport("faq")}
            handleClick2={() => whatSupport("contact")}
            color="color1"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-3 mt-6">
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
