import { clientRequest } from "../client";

const bookRide = async ({ ...bookingData }) => {
  console.log(bookingData)
  try {
    const { data } = await clientRequest({
      url: "/bookings/new-booking/",
      method: "post",
      data: bookingData,
    });
    return data;
  } catch (error) {
    // const {
    //   data: { detail },
    // } = error.response;
    // console.log(error, 'from booking');
    throw new Error("Error booking ride");
  }
};

export default bookRide;
