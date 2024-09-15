import riders from "../mockData/riders";
import Rider from "../components/Rider";
import { useNavigate, useOutletContext } from "react-router-dom";
import Btn from "../components/Btn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { riderSelection } from "../store/slices/global-slice";

const RiderIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { switchRiderTitle, ridersTitle } = useOutletContext();

  useEffect(() => {
    localStorage.clear("rider");
    switchRiderTitle("Available Riders");
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index">
      {riders.map((item) => {
        return (
          <Rider
            key={item._id}
            {...item}
            handleClick={() => {
              dispatch(riderSelection(item));
            }}
          />
        );
      })}
    </div>
  );
};

export default RiderIndex;
