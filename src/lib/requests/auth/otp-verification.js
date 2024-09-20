import { clientRequest } from "../client";

const verifyOtp = async ({ ...otpDetails }) => {
  console.log(otpDetails)
  try {
    const { data } = await clientRequest({
      url: "/auth/otp-verification/",
      method: "post",
      data: otpDetails,
    });
    console.log(data, 'verified');
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error occured verifying otp");
  }
};

export default verifyOtp;
