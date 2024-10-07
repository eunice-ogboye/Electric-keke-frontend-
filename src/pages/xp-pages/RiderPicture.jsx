import { motion } from "framer-motion";
import { riderPictureContainer } from "../../constants/variants";
import Btn from "@/components/shared/btn/Btn";

const RiderPicture = ({ rider, submitBooking }) => {
  return (
    <motion.div
      initial="out"
      animate="enter"
      variants={riderPictureContainer}
      className="w-full max-w-[510px] justify-between"
    >
      <div className="rider-picture-container">
        <img
          src={rider?.photo || "/persons/rider1.png"}
          alt={rider?.fullname}
          className="rider-picture"
        />
      </div>

      <div className="mt-4 hidden md:block">
        <Btn styling="w-full btn btn--lg btn--primary" text="Request Ride" onClick={submitBooking} />
      </div>
    </motion.div>
  );
};

export default RiderPicture;
