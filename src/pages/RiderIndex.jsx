import riders from "../mockData/riders";
import Rider from "../components/Rider";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../context";
import Btn from "../components/Btn";
import { useEffect } from "react";

const RiderIndex = () => {
  const navigate = useNavigate();
  const { switchRiderTitle, ridersTitle } = useOutletContext();
  const { Dispatch } = useGlobalContext();

  useEffect(() => {
    localStorage.clear("rider");
    switchRiderTitle("Available Riders");
  }, []);

  useGSAP(() => {
    gsap.from(".rider-index", {
      opacity: 0,
      duration: 0.75,
      x: 300,
    });
  }, []);

  const gotoRiderInfo = (link) => {
    console.log('jose')
    gsap.to(".rider-index", {
      xPercent: -100,
      opacity: 0,
      duration: 2,
      onComplete: () => {
        navigate(link)
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-between rider-index">
        <h2 className="font-bold">{ridersTitle}</h2>
        <Btn type="cancel" fixed />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mt-7 relative rider-index">
        {riders.map((item) => {
          return (
            <Rider
              key={item._id}
              {...item}
              handleClick={() => {
                gotoRiderInfo(item.name + item._id);
                Dispatch("rider", { rider: item });
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default RiderIndex;
