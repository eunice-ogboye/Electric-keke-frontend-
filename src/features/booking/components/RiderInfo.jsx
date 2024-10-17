import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { addItemToLs, deletItemFromLs, getItemFromLs } from "../../../utils/ls";
import dispatchables from "../../../utils/dispatchables";
import Reviews from "../../../components/xp/Reviews";
import { BookRide, GetListOfBookings } from "../services";
import { riderParentVariant } from "../../../constants/variants";
import LoadBooking from "./LoadBooking";
import Btn from "@/components/btn/Btn";
import RiderPicture from "./RiderPicture";
import Rate from "./Rate";

const RiderInfo = () => {
  const { showAlert, loading, unloading } = dispatchables();

  const [waiting, setWaiting] = useState(false);
  const [rider, setRider] = useState(getItemFromLs("rider") || null);
  const navigate = useNavigate();

  const submitBooking = async () => {
    loading();
    const bookData = getItemFromLs("book-data");
    // socket.emit('new-booking')
    try {
      const booking = await BookRide(bookData);
      console.log(booking);
      showAlert("Ride Booking Succefull, Wait a moment");
      setWaiting(true);

      // will be emitting an event here
      // socket.emit('request-ride')

      // this code below from here need to be extracted becosuse this showuld be only when driver accepts
      // const bookingList = await GetListOfBookings();
      // console.log(bookingList);

      // const lastestBooking = bookingList.length - 1;
      // addItemToLs("current-ride", bookingList[lastestBooking]);

      // deletItemFromLs("book-data");
      // navigate("/tracking");
      // from the start this is only when the driver accepts
    } catch (error) {
      console.log(rider);
      showAlert(`Error Booking Ride with Rider ${rider.fullname}`);
    } finally {
      unloading();
    }
  };

  return (
    <AnimatePresence>
      {waiting ? (
        <LoadBooking setRider={setRider} />
      ) : (
        <motion.div
          initial="out"
          animate="enter"
          exit="leave"
          transition={{ duration: 0.65, type: "just" }}
          variants={riderParentVariant}
          className="relative"
        >
          <motion.div className="md:flex md:gap-x-6 lg:gap-x-[102px] mt-7">
            <RiderPicture rider={rider} submitBooking={submitBooking} />

            <motion.div className="w-full max-w-[588px] pt-3">
              <motion.div className="w-full max-w-96 h-fit md:h-[174px]">
                <div>
                  <p className="text-2xl">
                    License plate: {rider?.plate_number || "lkj-238"}
                  </p>
                  <p className="text-2xl mt-3 md:mt-4">
                    Keke Color: {rider?.color || "yellow"}
                  </p>
                </div>

                <Rate
                  rate={rider?.rating || 2}
                  statik
                  className="mt-2 md:mt-4 lg:mt-10"
                  size={58}
                />
              </motion.div>

              <motion.div className="md:mt-6 lg:mt-10 ">
                <Reviews />

                <div className="mt-4 md:hidden">
                  <Btn
                    styling="w-full btn btn--lg btn--primary"
                    text="Request Ride"
                    onClick={submitBooking}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RiderInfo;
