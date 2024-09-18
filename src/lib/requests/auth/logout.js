import { clearLs, deletItemFromLs } from "../../ls";
import { clientRequest } from "../client";

const logoutUser = async (showAlert) => {
  try {
    await clientRequest({ url: "/auth/logout/", method: "post" });
    showAlert("Log out succesful");
    clearLs();
  } catch (err) {
    throw new Error("Error Logging Out");
  }
};

export default logoutUser;
