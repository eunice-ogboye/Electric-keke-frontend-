import { useDispatch, useSelector } from "react-redux";
import { chooseSupport } from "@/store/slices/global-slice";
// import { updateBookingData } from "../../store/slices/bookride-slice";
import dispatchables from "@/utils/dispatchables";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { memo } from "react";
import Btn from "@/components/btn/Btn";
import Togglers from "@/components/Togglers";
import ChooseModal from "@/features/booking/components/ChooseModal";

const HeroCta = ({ type }) => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  // redux dispatch and globals
  const { chooseRole } = dispatchables();
  const { support } = useSelector((state) => state.global);

  // what kind of support
  const whatSupport = (key) => {
    dispatch(chooseSupport(key));
  };

  return (
    <div className="flex-center gap-2 mt-6">
      {type === "main" || type === "earn" ? (
        <>
          {type === "main" && <ChooseModal type="ride" />}

          {type === "earn" && !user && (
            <Btn
              text="Register"
              href="/onboarding/registration"
              styling="btn--hero btn--primary w-[232px]"
              onClick={() => {
                // showuld set the registering as in the ls as rider
                chooseRole('Rider')
              }}
            />
          )}

          {type === "main" && <ChooseModal type="delivery" />}
        </>
      ) : (
        <Togglers
          className="w-full flex-center mt-10"
          text1="Faq"
          text2="Contact Us"
          isConditionTrue={support === "faq"}
          handleClick1={() => whatSupport("faq")}
          handleClick2={() => whatSupport("contact")}
          color="color1"
        />
      )}
    </div>
  );
};

export default memo(HeroCta);
