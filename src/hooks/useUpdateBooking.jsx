import { addItemToLs, getItemFromLs } from "../utils/ls";
import { GetListOfBookings } from "../services/bookings";

export const useUpdateBooking = (status, setCurrentRide) => {
  const currentRide = getItemFromLs("current-ride");

  useEffect(() => {
    if (currentRide.status === status) {
      (async () => {
        try {
          const bookings = await GetListOfBookings();
          const lastest = bookings.length - 1;
          setCurrentRide(bookings[lastest]);
          addItemToLs("current-ride", bookings[lastest]);
        } catch (error) {
          console.log(error);
        }
      })();
      console.log(`still ${status}`);
    }
    console.log("jose");
  }, [status]);
};
