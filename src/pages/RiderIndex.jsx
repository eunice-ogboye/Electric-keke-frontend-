import riders from "../mockData/riders";
import Rider from "../components/Rider";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { riderSelection } from "../store/slices/global-slice";
import { useTitle } from "../lib/hooks";
import { deletItemFromLs } from "../lib/ls";
import { updateBookingData } from "../store/slices/bookride-slice";
import getOnlineDrivers from "../lib/requests/booking/get-online-drivers";

const RiderIndex = () => {
  useTitle("Riders");

  // const navigate = useNavigate();
  // reducs globals and funct
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { switchRiderTitle, ridersTitle } = useOutletContext();

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const data = await getOnlineDrivers();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    deletItemFromLs("rider");
    switchRiderTitle("Available Riders");
    fetchRiders();
  }, []);

  const chooseRider = async (item) => {
    console.log(item);
    dispatch(updateBookingData({ key: "rider", value: item.email }));
    dispatch(riderSelection(item));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index">
      {riders.map((item) => {
        return (
          <Rider
            key={item._id}
            {...item}
            handleClick={() => chooseRider(item)}
          />
        );
      })}
    </div>
  );
};

export default RiderIndex;
