import axios from "axios";
import customAxios from "./customAxios";
import { addUser } from "../../store/slices/user-slice";

export const getLoggedInUser = async () => {
  try {
    const { data } = await customAxios.get("/auth-user/");
    return data;
  } catch (error) {
    console.log("something", error);
  }
};

const loginUser = async (
  formData,
  showAlert,
  switchTypeNavigate,
) => {
  const { username, password, checkPass } = formData;
  const isPasswordMatched = password === checkPass;

  if (!isPasswordMatched) {
    showAlert("", "confirm password matches");
    return;
  }
  try {
    const { data } = await axios.post("/api/token/", {
      username,
      password,
    });
    const { access: accessToken, refresh: refreshToken } = data;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    showAlert("", "login successfull");
    switchTypeNavigate(null, "/");
  } catch (error) {
    console.log(error);
    // const {
    //   data: { detail },
    // } = error.response;
    // showAlert("", detail || "something");
  }
};

export default loginUser;
