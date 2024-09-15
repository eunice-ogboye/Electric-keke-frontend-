import Rate from "../components/Rate";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components";
import reviews from "../mockData/reviews";
import { motion } from "framer-motion";
import Loader from "../assets/svg/Loader";

const fetchAcceptance = (order, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order());
    }, time);
  });
};

const RiderInfo = () => {
  // const { switchRiderTitle, ridersTitle } = useOutletContext();
  const [rider, setRider] = useState(
    JSON.parse(localStorage.getItem("rider")) || null
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getRider = localStorage.getItem("rider");
  //   if (getRider !== null) {
  //     Dispatch("rider", { rider: JSON.parse(getRider) });
  //   }
  // }, []);

  const acceptance = () => {
    setWaiting(true);
    fetchAcceptance(() => {
      setWaiting(false);
      navigate("/tracking");
    }, 5000);
  };

  return waiting ? (
    <motion.div
      initial={{
        y: 1000,
      }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
      className="bg-white w-full py-20 z-50 h-[calc(100vh-20vh)]"
    >
      <div>
        <div className="w-fit h-fit mx-auto">
          <Loader size={153} />
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
    <div className="relative">
      <div className="md:flex mt-7 rider-info">
        <div className="w-full max-w-[510px] justify-between">
          <div className="w-full h-[440px] md:h-[630px]">
            <img
              src={rider?.photo}
              alt={rider?.name}
              className="size-full rounded-normal object-center object-cover"
            />
          </div>

          <div className="mt-4 hidden md:block">
            <Btn size="full" text="Request Ride" handleClick={acceptance} />
          </div>
        </div>

        <div className="w-full max-w-[588px] md:ml-[102px] pt-3">
          <div className="w-full max-w-96 h-fit md:h-[174px]">
            <div>
              <p className="text-2xl font-montserrat">
                License plate: {rider?.plate_number}
              </p>
              <p className="text-2xl mt-4 font-montserrat">
                Keke Color: {rider?.color}
              </p>
            </div>

            <Rate rate={rider?.rating} statik big className="mt-2 md:mt-10" />
          </div>

          <div className="mt-5 md:mt-10">
            <h2 className="font-bold">Review</h2>

            <div className="space-y-2 mt-2 md:mt-6">
              {reviews.map((item) => (
                <div key={item.name} className="p-[15px] space-y-1">
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
                </div>
              ))}
            </div>

            <div className="mt-4 md:hidden">
              <Btn size="full" text="Request Ride" handleClick={acceptance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderInfo;
