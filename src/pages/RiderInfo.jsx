import Rate from "../components/Rate";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components";
import reviews from "../mockData/reviews";
import { delay, motion } from "framer-motion";
import Loader from "../assets/svg/Loader";
import { getItemFromLs } from "../lib/ls";
import { useDispatch, useSelector } from "react-redux";
import bookRide from "../lib/requests/booking/bookRide";
import { alertUser, hideAlert } from "../store/slices/global-slice";

const fetchAcceptance = (order, time, cancel) => {
  return new Promise((resolve) => {
    const timing = setTimeout(() => {
      resolve(order());
    }, time);
    cancel = () => {
      clearTimeout(timing);
    };
  });
};

const RiderInfo = () => {
  const dispatch = useDispatch();
  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  };
  const [waiting, setWaiting] = useState(false);
  const [rider, setRider] = useState(getItemFromLs("rider") || null);
  const navigate = useNavigate();

  const parentVariant = {
    out: {
      x: 200,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 2,
        stagerChildren: 3,
      },
    },
    leave: { x: -200, opacity: 0 },
  };

  const pictureContainer = {
    out: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.2,
      },
    },
  };
  const reviewContainer = {
    out: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delayChildren: 0.2,
        staggerChildren: 0.65,
      },
    },
  };
  const reviewContainerChildren = {
    out: { opacity: 0, y: 200 },
    enter: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: custom * 0.35,
      },
    }),
  };

  // const acceptance = async () => {
  //   setWaiting(true);
  //   fetchAcceptance(() => {
  //     setWaiting(false);
  //     navigate("/tracking");
  //   }, 5000);
  // };

  useEffect(() => {
    console.log(rider);
  }, []);

  const submitBooking = async () => {
    setWaiting(true);
    const bookData = getItemFromLs("book-data");
    // console.log(bookData, "from submit");
    try {
      const { data } = await bookRide(bookData);
      showAlert("Ride Booking Succefull, Wait a moment");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      showAlert(`Error Booking Ride with Rider ${rider.name}`);
    }
  };

  return waiting ? (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
      className="bg-white w-full py-20 z-50 h-[calc(100vh-20vh)]"
    >
      <div>
        <div className="w-fit h-fit mx-auto">
          {/* <Loader size={153} /> */}
          <img src="/loaders/loading.gif" />
        </div>

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
  ) : (
    <motion.div
      initial="out"
      animate="enter"
      exit="leave"
      transition={{ duration: 0.65, type: "just" }}
      variants={parentVariant}
      className="relative"
    >
      <motion.div className="md:flex mt-7 rider-info">
        <motion.div
          initial="out"
          animate="enter"
          variants={pictureContainer}
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

        <motion.div className="w-full max-w-[588px] md:ml-[102px] pt-3">
          <motion.div className="w-full max-w-96 h-fit md:h-[174px]">
            <div>
              <p className="text-2xl font-montserrat">
                License plate: {rider?.plate_number || "lkj-238"}
              </p>
              <p className="text-2xl mt-4 font-montserrat">
                Keke Color: {rider?.color || "yellow"}
              </p>
            </div>

            <Rate
              rate={rider?.rating || 2}
              statik
              big
              className="mt-2 md:mt-10"
            />
          </motion.div>

          <motion.div className="mt-5 md:mt-10">
            <motion.h2 className="font-bold">Review</motion.h2>

            <motion.div
              initial="out"
              animate="enter"
              variants={reviewContainer}
              className="space-y-2 mt-2 md:mt-6"
            >
              {reviews.map((item, index) => (
                <motion.div
                  initial="out"
                  animate="enter"
                  variants={reviewContainerChildren}
                  key={item.name}
                  custom={index}
                  className="p-[15px] space-y-1"
                >
                  <div className="flex items-center gap-[10px]">
                    <div className="size-[40px] rounded-full">
                      <img src={item.photo} alt={item.name} />
                    </div>
                    <div>
                      <p className="text-eiteen text-eco-green font-bold font-montserrat">
                        {item.name}
                      </p>
                      <p className="text-base text-eco-neutral-prime font-montserrat">
                        {item.email}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-eco-neutral-prime font-montserrat">
                    {item.review}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-xs text-eco-neutral-prime border-b border-eco-neutral-ptext-eco-neutral-prime">
                      Show original
                    </button>
                    <p className="text-xs text-eco-neutral-prime">
                      {item.createdAt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-4 md:hidden">
              <Btn
                size="full"
                text="Request Ride"
                handleClick={submitBooking}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RiderInfo;
