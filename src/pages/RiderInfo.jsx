import { useGlobalContext } from "../context";
import Rate from "../components/Rate";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components";
// import { useOutletContext } from "react-router-dom";

const fetchAcceptance = (order, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order());
    }, time);
  });
};

const RiderInfo = () => {
  // const { switchRiderTitle, ridersTitle } = useOutletContext();
  const navigate = useNavigate();
  const [waiting, setWaiting] = useState(false);
  const {
    dispatch,
    globalState: { rider },
  } = useGlobalContext();

  useEffect(() => {
    const getRider = localStorage.getItem("rider");
    if (getRider !== null) {
      dispatch({ type: "rider", payload: { rider: JSON.parse(getRider) } });
    }
  }, []);

  const acceptance = () => {
    setWaiting(true);
    fetchAcceptance(() => {
      navigate("/tracking");
      setWaiting(false);
    }, 5000);
  };

  return waiting ? (
    <>
      <div className="flex-center">
        <div>
          <div className="mx-auto">
            <img src="/waiting.svg" alt="waiting" />
          </div>

          <Heading
            className="text-center  max-w-[840px] mx-auto"
            type="about"
            title="Waiting for Rider to Accept Ride"
            description="If your ride request hasn’t been accepted promptly, feel free to cancel and try again."
            dclass="text-[1.75rem] text-neutral mt-6"
          />

          <div className="w-[540px] mx-auto mt-10">
            <Btn text="Cancel Request" size="full" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-bold">{rider?.name}</h2>
        <Btn
          type="cancel"
          handleClick={() => {
            // switchRiderTitle("Available Riders");
            navigate("/riders");
          }}
          fixed
        />
      </div>

      <div className="flex mt-7">
        <div className="w-[510px] h-[726px] border flex flex-col justify-between">
          <div className="w-full h-[630px]">
            <img
              src={rider?.photo}
              alt={rider?.name}
              className="size-full rounded-normal object-center object-cover"
            />
          </div>

          <Btn size="full" text="Request Ride" handleClick={acceptance} />
        </div>

        <div className="w-[588px] ml-[102px] pt-5">
          <div className="w-96 border">
            <div>
              <p className="text-2xl">License plate: {rider?.plate_number}</p>
              <p className="text-2xl">Keke Color: {rider?.color}</p>
            </div>

            <Rate rate={rider?.rating} statik big className="mt-10" />
          </div>

          <div className="mt-10">
            <h2 className="font-bold">Reviews</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiderInfo;
