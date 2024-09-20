import CustomError from "../../../lib/error-handler/CustomError";
import { addItemToLs, clearLs, getItemFromLs } from "../../../lib/ls";
import { clientRequest } from "../client";


export const ResetPassword = async ({ ...resetData }) => {
  try {
    const { data } = await clientRequest({
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
    const { data } = await clientRequest({
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
    const { data } = await clientRequest({
      url: "/auth/request-new-otp/",
      method: "post",
      data: otpData,
    });
    addItemToLs("userId", data.user_id);
    return data;
  } catch (error) {
    throw new CustomError("Error requesting otp");
  }
};

export const ActivateUser = async ({ ...otpDetails }) => {
  try {
    const { data } = await clientRequest({
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
  fullname,
  email,
  password,
  checkPass,
  phone,
  state,
  address,
  message_type,
}) => {
  const role = getItemFromLs("registeringAs");

  try {
    const { data } = await clientRequest({
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
        re_password: checkPass,
        message_type,
      },
    });
    /**
     * when we register the user the id is needed
     * to verify the user for the otp, we will be
     * fetching it from ls
     */
    addItemToLs("userId", data.id);
  } catch (error) {
    const { data } = error.response;
    const dataValues = Object.keys(values);
    throw new CustomError("Error Registering User");
  }
};

export const Login = async ({ username, password, checkPass }) => {
  console.log(username)
  //login logic
  const isPasswordMatched = password === checkPass;

  if (!isPasswordMatched) {
    throw new Error("Password doesnt match");
  }

  try {
    console.log("start");
    const { data } = await clientRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });
console.log("i reached here")
    const direction = await StoreAndDirectUser(data);
    return direction;
  } catch (error) {

    console.log(error);
    const {
      data: { detail },
    } = error.response;
    // showAlert(detail || "something");
    throw new Error("Credentials have issue");
  }
};

export const Logout = async (showAlert) => {
  // logout logic
  try {
    await clientRequest({ url: "/auth/logout/", method: "post" });
    showAlert("Log out succesful");
    clearLs();
  } catch (err) {
    throw new Error("Error Logging Out");
  }
};

export const DeleteAccount = async () => {
  try {
    const { data } = clientRequest({
      url: "/auth/delete-account/",
      method: "delete",
    });
    console.log(data);
    clearLs();
    return data;
  } catch (error) {
    console.log(error);
    throw new CustomError("Error Deleting Account", {
      why: "now",
    });
  }
};
