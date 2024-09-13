import customAxios from "./customAxios";

const logoutUser = async (showAlert) => {
  try {
    await customAxios.post("/logout/");
    showAlert("", "Log out succesful");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    location.reload();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("i have doen");
  }
};

export default logoutUser;
