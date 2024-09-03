import riders from "../mockData/riders";
import Rider from "../components/Rider";
import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../context";
import Btn from "../components/Btn";
import { useEffect } from "react";

const RiderIndex = () => {
  const { switchRiderTitle, ridersTitle } = useOutletContext();
  const { dispatch, Dispatch } = useGlobalContext();

  useEffect(() => {
    localStorage.clear("rider");
    switchRiderTitle("Available Riders");
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-bold">{ridersTitle}</h2>
        <Btn type="cancel" fixed />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mt-7 relative">
        {riders.map((item) => {
          return (
            <Rider
              key={item._id}
              {...item}
              handleClick={() => {
                switchRiderTitle(item.name);
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
