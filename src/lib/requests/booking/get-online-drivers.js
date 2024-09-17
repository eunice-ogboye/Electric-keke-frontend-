import axios from "axios";
import { axiosCustomizedRequest } from "../axiosCustomized";

const getOnlineDrivers = async () => {
  try {
    const { data } = await axiosCustomizedRequest({url: '/bookings/riders/'})
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getOnlineDrivers;
