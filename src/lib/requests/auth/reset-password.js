import { clientRequest } from "../client";

const resetPassword = async ({ ...resetData }) => {
  try {
    const { data } = await clientRequest({
      url: "/auth/reset-password/",
      method: "post",
      data: resetData,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error resetting password from the back");
  }
};

export default resetPassword;
