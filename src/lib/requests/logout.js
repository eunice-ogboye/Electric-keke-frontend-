import { clearLs, deletItemFromLs } from "../ls";
import { clientRequest } from "./client";

const logoutUser = async (showAlert) => {
  showAlert("loging out");
  try {
    await clientRequest({ url: "/auth/logout/", method: "post" });
    showAlert("Log out succesful");
    // deletItemFromLs("accessToken");
    // deletItemFromLs("refreshToken");
    // deletItemFromLs("user");
    clearLs();
    window.location.href("/");
  } catch (err) {
    console.log(err);
    throw new Error("Error Logging Out", err);
  }
};

export default logoutUser;
