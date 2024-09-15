import { axiosCustomizedRequest } from "../axiosCustomized";

const activateUser = async ({ ...otpDetails }) => {
  console.log(otpDetails)
  try {
    const { data } = await axiosCustomizedRequest({
      url: "/auth/activate-user/",
      method: "post",
      data: otpDetails,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data)
    throw new Error(error.response.data.detail);
    return error.response
  }
};

export default activateUser;
