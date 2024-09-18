// import riders from "../mockData/riders";
import Rider from "../components/Rider";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { riderSelection, ridersListing } from "../store/slices/global-slice";
import { useTitle } from "../lib/hooks";
import { deletItemFromLs, getItemFromLs } from "../lib/ls";
import { updateBookingData } from "../store/slices/bookride-slice";
import getAvailableRiders from "../lib/requests/booking/getAvailableRiders";
import { AnimatePresence, motion } from "framer-motion";

const RiderIndex = () => {
  useTitle("Riders");
  const dispatch = useDispatch();
  const { riders } = useSelector((state) => state.global);

  const [loading, setLoading] = useState(true);
  const [ridersList, setRidersList] = useState(riders || []);

  useEffect(() => {
    setLoading(true);
    const fetchRiders = async () => {
      try {
        const data = await getAvailableRiders();
        setRidersList(data);
        dispatch(ridersListing(data));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    deletItemFromLs("rider");
    // switchRiderTitle("Available Riders");

    ridersList.length < 1 ? fetchRiders() : setLoading(false);
  }, []);

  const chooseRider = async (item) => {
    console.log(item);
    dispatch(updateBookingData({ key: "rider", value: item.email }));
    dispatch(riderSelection(item));
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
        {ridersList.map((item) => {
          return (
            <Rider
              key={item.id}
              {...item}
              photo="/persons/rider1.png"
              rating={2}
              color="white"
              plate_number="LKJ-12346"
              handleClick={() => chooseRider(item)}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default RiderIndex;
