import { addItemToLs, clearLs, getItemFromLs } from "@/utils/ls";
// import { clientRequest } from "../client";
import { clientRequest } from "@/services/client";
import CustomError from "@/services/custom-error/CustomError";
import makePlainRequest from "@/services/plainRequest";

export const ResetPassword = async ({ ...resetData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/reset-password/",
      method: "post",
      data: resetData,
    });
    return data;
  } catch (error) {
    throw new Error("Error resetting password from the back");
  }
};

export const OtpVerification = async ({ ...otpData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/otp-verification/",
      method: "post",
      data: otpData,
    });
    return data;
  } catch (error) {
    throw new CustomError("Error OtpVerification");
  }
};

export const RequestOtp = async ({ ...otpData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/request-new-otp/",
      method: "post",
      data: otpData,
    });
    console.log(data);
    addItemToLs("userId", data.user_id);
    return data;
  } catch (error) {
    throw new CustomError("Error requesting otp");
  }
};

export const ActivateUser = async ({ ...otpDetails }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/activate-user/",
      method: "post",
      data: otpDetails,
    });
    return data;
  } catch (error) {
    throw new CustomError("Error Activating User", {
      msg: error.response.data.detail,
    });
  }
};

export const ShowMe = async () => {
  try {
    const { data } = await clientRequest({
      url: "/auth/auth-user/",
    });
    return data;
  } catch (error) {
    throw new Error("Error Showing User");
  }
};

export const StoreAndDirectUser = async ({ access, refresh }) => {
  addItemToLs("accessToken", access);
  addItemToLs("refreshToken", refresh);
  try {
    const user = await ShowMe();
    const { role, id } = user;
    addItemToLs("user", user);
    /**
     * When user logins we would want to route then to therir
     * specified page
     */
    return role === "User"
      ? "/"
      : role === "Rider"
      ? `/driver/${id}`
      : "/admin";
  } catch (error) {
    console.log(error);
    throw new Error("Error Directing User");
  }
};

export const RegisterUser = async ({
  address,
  email,
  fullname,
  password,
  re_password,
  phone,
  state,
  message_type,
}) => {
  const role = getItemFromLs("registeringAs");

  try {
    addItemToLs("user-email", email);
    const data = await makePlainRequest({
      url: "/auth/register-user/",
      method: "post",
      data: {
        fullname,
        address: address,
        state_of_residence: state,
        role,
        email,
        phone,
        password,
        re_password,
        message_type,
      },
    });
    console.log(data);
    /**
     * when we register the user the id is needed
     * to verify the user for the otp, we will be
     * fetching it from ls
     */
    addItemToLs("userId", data.id);
  } catch (error) {
    const errorRes = error.data.response;
    const errors_arr = Object.entries(errorRes.data).map(([key, value]) => {
      return value[0];
    });

    throw new CustomError("Error Registering User", errors_arr);
  }
};

export const LoginUser = async ({ username, password, checkPass }) => {
  console.log(username);
  try {
    console.log("start");
    const { data } = await makePlainRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });
    console.log(data);
    console.log("i reached here");
    const direction = await StoreAndDirectUser(data);
    return direction;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Logout = () => {
  clearLs();
};

export const DeleteAccount = async () => {
  try {
    const data = await clientRequest({
      url: "/auth/delete-account/",
      method: "delete",
    });
    console.log(
      data,
      "llllllllllllllllllllllllllllllllllllllllllllllllllllllllll"
    );

    clearLs();
    return data;
  } catch (error) {
    console.log(error);
    throw new CustomError("Error Deleting Account", {
      why: "now",
    });
  }
};
