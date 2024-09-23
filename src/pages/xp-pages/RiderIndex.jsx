// import riders from "../mockData/riders";
import Rider from "../../components/xp/Rider";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTitle } from "../../lib/hooks";
import { addItemToLs, deletItemFromLs } from "../../lib/ls";
import getAvailableRiders from "../../lib/requests/booking/getAvailableRiders";
import { AnimatePresence, motion } from "framer-motion";
import dispatchables from "../../utils/dispatchables";
import useReroute from "../../utils/Reroute";

const RiderIndex = () => {
  useTitle("Riders");

  const { inputDataForBookingRequest, updateDriversList, chooseRider } =
    dispatchables();

  /**reroute for internal server error
   * to the error page
   */
  const { rerouting } = useReroute();
  const { riders } = useSelector((state) => state.global);

  const [loading, setLoading] = useState(true);
  const [availableRidersList, setAvailableRidersList] = useState(riders || []);

  useEffect(() => {
    setLoading(true);
    const fetchRiders = async () => {
      try {
        const data = await getAvailableRiders();
        setAvailableRidersList(data);
        updateDriversList(data);
        setLoading(false);
      } catch (error) {
        const { status, code } = error.data;
        // we will be creating function for that
        rerouting(status);
      }
    };

    /**
     * We have to delete the already stored rider
     * So we can update the ls with the new chosen rider
     * to show on the request ride page
     */
    deletItemFromLs("rider");
    // switchRiderTitle("Available Riders");

    availableRidersList.length < 1 ? fetchRiders() : setLoading(false);
  }, []);

  const selectRider = (item) => {
    // console.log(item);
    inputDataForBookingRequest("rider", item.email);
    // dispatch(updateBookingData({ key: "rider", value: item.email }));
    chooseRider(item);
  };

  return loading ? (
    <div>Loadding ...</div>
  ) : (
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.65, type: "just" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index"
      >
        {availableRidersList.length <1 ? (
          <div className="border col-span-3">
            <h2>No availble riders at the moment</h2>
          </div>
        ) : (
          <>
            {availableRidersList.map((item) => {
              return (
                <Rider
                  key={item.id}
                  {...item}
                  photo="/persons/rider1.png"
                  rating={2}
                  color="white"
                  plate_number="LKJ-12346"
                  handleClick={() => selectRider(item)}
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
