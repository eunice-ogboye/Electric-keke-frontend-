import { useNavigate } from "react-router-dom";
import Btn from "../../components/shared/Btn";
import {
  rideStatusLsUpdate,
  rideStatusUpdateRequest,
} from "../../lib/requests/booking/abstracts";
import { UpdateBooking } from "../../lib/requests/booking";

const TrackDetails = ({ role, origin, destination, price, status }) => {
  const navigate = useNavigate();

  const riderHandlClick = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("in_progress");

    try {
      const data = await UpdateBooking(rideToUpdateData);
      console.log(data);
      rideStatusLsUpdate("in_progress");
    } catch (error) {
      console.log(error);
    }
  };

  const passengerHandleClick = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("cancelled");

    try {
      const data = await UpdateBooking(rideToUpdateData);
      console.log(data);
      rideStatusLsUpdate("cancelled");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-14">
      <div className="space-y-4">
        <div className="ride-location">
          <p className="text-eiteen">{origin}</p>
        </div>
        <div className="ride-location">
          <p className="text-eiteen">{destination}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-8">
        <div className="ride-fare">#{price}</div>
        <Btn
          text={role === "User" ? "Cancel Ride" : "Start Trip"}
          handleClick={role === "User" ? passengerHandleClick : riderHandlClick}
          disabled={status}
        />
      </div>
    </div>
  );
};

export default TrackDetails;
