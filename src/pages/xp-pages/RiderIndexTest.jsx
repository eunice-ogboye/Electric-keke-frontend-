import { AnimatePresence, motion } from "framer-motion";
import useTitle from "../../hooks/useTitle";
import TestRider from "../../components/riders/TestRider";
import riders from '../../mock-data/riders';

const RiderIndexTest = () => {
  useTitle("Riders");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.65, type: "just" }}
        className="rider-index-container"
      >
        {riders.length < 1 ? (
          <div className="border col-span-3">
            <h2>No availble riders at the moment</h2>
          </div>
        ) : (
          <>
            {riders.map((item) => {
              console.log(item);
              return <TestRider {...item} />;
            })}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default RiderIndexTest;
