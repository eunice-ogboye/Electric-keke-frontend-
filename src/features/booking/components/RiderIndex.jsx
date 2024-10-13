// import riders from "../mockData/riders";
import Rider from "./Rider";
import { AnimatePresence, motion } from "framer-motion";
import dispatchables from "../../../utils/dispatchables";
import useReroute from "../../../hooks/useReroute";
// import { GetAvailableRiders } from "../../services/bookings";
import useTitle from "../../../hooks/useTitle";
import { useRiders } from "../../../hooks/useRiders";
// import riders from '../../mock-data/riders';

const RiderIndex = () => {
  useTitle("Riders");

  const { inputDataForBookingRequest, updateDriversList, chooseRider } =
    dispatchables();

  const { isLoading, riders } = useRiders("riders");

  return isLoading ? (
    <div>Loadding ...</div>
  ) : (
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.65, type: "just" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index"
      >
        {riders.length < 1 ? (
          <div className="border col-span-3">
            <h2>No availble riders at the moment</h2>
          </div>
        ) : (
          <>
            {riders.map((item) => {
              console.log(item);
              return (
                <Rider
                  key={item.id}
                  rider={{
                    ...item,
                    photo: "/persons/rider1.png",
                    rating: 2,
                    color: "white",
                    plate_number: "LKJ-12346",
                  }}
                />
              );
            })}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default RiderIndex;
