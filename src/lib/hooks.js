import { useDispatch } from "react-redux";
// import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import { addItemToLs, getItemFromLs } from "./ls";
import { GetListOfBookings } from "./requests/booking";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title + " " + "EcoRide";
  }, [title]);
};

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

export const useResource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getResourceFunc();
      console.log(response, "from use resouce");
      setResource(response);
    })();
  }, []);

  return resource;
};
