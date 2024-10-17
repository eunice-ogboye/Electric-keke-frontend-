import { useNavigate } from "react-router-dom";
import { rideStatusLsUpdate, rideStatusUpdateRequest } from "@/utils";
import { UpdateBooking } from "../../booking/services";
import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";

const TrackDetails = ({ role, origin, destination, price, status }) => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const startTrip = async () => {
    showAlert("accepted trip");
    const rideToUpdateData = rideStatusUpdateRequest("in_progress");

    try {
      const data = await UpdateBooking(rideToUpdateData);
      console.log(data);
      rideStatusLsUpdate("in_progress");
    } catch (error) {
      console.log(error);
    }
  };

  const declineTrip = async () => {
    showAlert("declined trip");
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
        <div className="ride__location">
          <p className="text-eiteen">{origin}</p>
        </div>
        <div className="ride__location">
          <p className="text-eiteen">{destination}</p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-8">
        <div className="ride-fare">#{price}</div>
        <Btn
          text={role === "User" ? "Cancel Ride" : "Start Trip"}
          styling="btn btn--hero btn--primary w-[244px]"
          onClick={role === "User" ? declineTrip : startTrip}
          disabled={status}
        />
      </div>
    </div>
  );
};

export default TrackDetails;
