import { deletItemFromLs } from "../ls";
import { clientRequest } from "./client";

const logoutUser = async (showAlert) => {
  showAlert("loging out");
  try {
    await clientRequest({ url: "/auth/logout/", method: "post" });
    showAlert("Log out succesful");
    deletItemFromLs("accessToken");
    deletItemFromLs("refreshToken");
    deletItemFromLs("user");
  } catch (err) {
    throw new Error("Error Logging Out", err);
    console.log(err);
  }
};

export default logoutUser;
