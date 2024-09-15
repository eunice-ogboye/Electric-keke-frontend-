import { addItemToLs } from "../../../lib/ls";
import { axiosCustomizedRequest } from "../axiosCustomized";

const requestOtp = async ({ ...otpData }) => {
  console.log(otpData);
  try {
    const { data } = await axiosCustomizedRequest({
      url: "/auth/request-new-otp/",
      method: "post",
      data: otpData,
    });
    console.log(data);
    addItemToLs("userId", data.user_id);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error occured while fetching otp", error);
  }
};

export default requestOtp;
