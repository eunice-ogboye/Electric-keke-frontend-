import Avatars from "@/components/booking/Avatars";
import Btn from "../btn/Btn";
import Heading from "../Heading";
import { motion } from "framer-motion";

const ChooseMain = ({ type, goToInputRideDetails }) => {
  return (
    <>
      <motion.div className="h-20">
        <Avatars type={type} />
      </motion.div>

      <Heading
        className="text-center min-h-[110px] px-6 pt-6"
        title={
          type === "ride" ? "Ready to Go?" : "Instant or Sheduled- You Decide!"
        }
        tclass="text-[2rem] font-josefin"
        description={`Choose how you want to ${
          type === "ride" ? "ride" : "send"
        } with EcoRide`}
        dclass="text-eiteen text-neutral-500"
      />

      <div className="h-[7.5rem] flex-center gap-x-7">
        <Btn
          text="Instant Ride"
          styling="btn--hero btn--primary"
          onClick={goToInputRideDetails}
        />
        <Btn
          href="/schedule-ride"
          text="Schedule Ride"
          styling="btn--hero btn--secondary"
          type="secondary"
        />
      </div>
    </>
  );
};

export default ChooseMain;
