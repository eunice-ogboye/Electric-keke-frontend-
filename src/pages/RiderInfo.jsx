import { useGlobalContext } from "../context";
import Rate from "../components/Rate";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components";
// import { useOutletContext } from "react-router-dom";
import reviews from "../mockData/reviews";

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
    Dispatch,
    globalState: { rider },
  } = useGlobalContext();

  useEffect(() => {
    const getRider = localStorage.getItem("rider");
    if (getRider !== null) {
      Dispatch("rider", { rider: JSON.parse(getRider) });
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
          <div className="flex-center mb-5">
            <img src="/waiting.svg" alt="waiting" />
          </div>

          <Heading
            className="text-center w-full max-w-[840px] mx-auto"
            type="about"
            title="Waiting for Rider to Accept Ride"
            description="If your ride request hasn't been accepted promptly, feel free to cancel and try again."
            dclass="text-[1.75rem] text-neutral mt-6"
          />

          <div className="w-full max-w-[540px] mx-auto mt-10">
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
            navigate("/riders");
          }}
          fixed
        />
      </div>

      <div className="md:flex mt-7">
        <div className="w-full max-w-[510px] border justify-between">
          <div className="w-full h-96 md:h-[630px]">
            <img
              src={rider?.photo}
              alt={rider?.name}
              className="size-full rounded-normal object-center object-cover"
            />
          </div>

          <div className="mt-4">
            <Btn size="full" text="Request Ride" handleClick={acceptance} />
          </div>
        </div>

        <div className="w-full max-w-[588px] md:ml-[102px] pt-3">
          <div className="w-full max-w-96 border h-fit md:h-[174px]">
            <div>
              <p className="text-2xl">License plate: {rider?.plate_number}</p>
              <p className="text-2xl mt-4">Keke Color: {rider?.color}</p>
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
                      <p className="text-eiteen text-pgreen font-bold">
                        {item.name}
                      </p>
                      <p className="text-base text-neutral">{item.email}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral">{item.review}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-xs text-neutral border-b border-neutral">
                      Show original
                    </button>
                    <p className="text-xs text-neutral">{item.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiderInfo;
