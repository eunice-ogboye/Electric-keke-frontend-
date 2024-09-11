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

  return (
    <>
      <div className="flex items-center justify-between rider-index">
        <h2 className="font-bold">{ridersTitle}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index">
        {riders.map((item) => {
          return (
            <Rider
              key={item._id}
              {...item}
              handleClick={() => {
                // gotoRiderInfo(item.name + item._id);
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
