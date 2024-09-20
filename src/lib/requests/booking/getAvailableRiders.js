import { clientRequest } from "../client";
import CustomError from "../../../lib/error-handler/CustomError";

const getAvailableRiders = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/riders/" });
    console.log(data);
    return data;
  } catch (error) {
    throw new CustomError("Internal Server Error", {
      status: error.data.status,
    });
  }
};

export default getAvailableRiders;
