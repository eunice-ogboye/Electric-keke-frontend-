import { clientRequest } from "../client";
import CustomError from "../custom-error/CustomError";

export const BookRide = async ({ ...bookingData }) => {
  console.log(bookingData, "The booking data");
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

export const GetListOfBookings = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/", method: "get" });
    return data;
  } catch (error) {
    throw new Error("Error getting list of bookings");
  }
};

export const UpdateBooking = async ({ id, status }) => {
  try {
    const { data } = await clientRequest({
      url: `/bookings/${id}/status/`,
      method: "patch",
      data: { status },
    });
    console.log(data);
    return data;
  } catch (error) {
    const { detail } = error.data.response.data;
    throw new Error(detail);
  }
};

export const GetAvailableRiders = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/riders/" });
    console.log(data);
    return data;
  } catch (error) {
    // console.log(error, 'getavailable')
    throw new CustomError("Internal Server Error", {
      status: error.data.status,
    });
  }
};
