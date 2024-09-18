import axios from "axios";
import { axiosCustomizedRequest } from "../axiosCustomized";
import { clientRequest } from "../client";

const getAvailableRiders = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/riders/" });
    // const accessToken = getItemFromLs('accessToken');
    // console.log(accessToken);
    // const { data } = await axios.get("/bookings/riders/", {
    //   headers: `Bearer ${accessToken}`
    // });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAvailableRiders;
