import { motion } from "framer-motion";
import { riderPictureContainer } from "../../constants/variants";
import Btn from "../../components/shared/Btn";

const RiderPicture = ({ rider, submitBooking }) => {
  return (
    <motion.div
      initial="out"
      animate="enter"
      variants={riderPictureContainer}
      className="w-full max-w-[510px] justify-between"
    >
      <div className="w-full h-[440px] md:h-[630px]">
        <img
          src={rider?.photo || "/persons/rider1.png"}
          alt={rider?.fullname}
          className="size-full rounded-normal object-center object-cover"
        />
      </div>

      <div className="mt-4 hidden md:block">
        <Btn size="full" text="Request Ride" handleClick={submitBooking} />
      </div>
    </motion.div>
  );
};

export default RiderPicture;
