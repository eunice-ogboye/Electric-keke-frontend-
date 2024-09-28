import Loader from "../../assets/svg/Loader";
import Btn from "../../components/shared/Btn";
import Heading from "../../components/shared/Heading";
import { motion } from "framer-motion";

const LoadBooking = () => {
  return <motion.div
  initial={{ y: 1000, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ opacity: 0, transition: { duration: 3 } }}
  className="bg-white w-full py-20 z-50 h-[calc(100vh-20vh)]"
>
  <div>
    <Loader type="blub" className="w-fit h-fit mx-auto" />

    <Heading
      className="text-center w-full max-w-[840px] mx-auto"
      type="about"
      title="Waiting for Rider to Accept Ride"
      description="If your ride request hasn't been accepted promptly, feel free to cancel and try again."
      dclass="text-[1.75rem] text-eco-neutral-prime mt-6"
    />

    <div className="w-full max-w-[540px] mx-auto mt-10">
      <Btn text="Cancel Request" size="full" />
    </div>
  </div>
</motion.div>
};

export default LoadBooking;
