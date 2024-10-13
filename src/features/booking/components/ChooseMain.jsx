import Avatars from "@/features/booking/components/Avatars";
import { motion } from "framer-motion";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";

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
        tclass="title__default tilte--book"
        description={`Choose how you want to ${
          type === "ride" ? "ride" : "send"
        } with EcoRide`}
        dclass="desc__default mt-1 desc--book"
      />

      <div className="h-[7.5rem] flex-center gap-x-7">
        <Btn
          text="Instant Ride"
          styling="btn--hero btn--primary w-[36%]"
          onClick={goToInputRideDetails}
        />
        <Btn
          href="/schedule-ride"
          text="Schedule Ride"
          styling="btn--hero btn--secondary"
          linkBtnWidth=" w-[48%]"
        />
      </div>
    </>
  );
};

export default ChooseMain;
