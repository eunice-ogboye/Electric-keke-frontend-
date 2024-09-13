import axios from "axios";
import customAxios from "./customAxios";

export const getLoggedInUser = async (Dispatch) => {
  try {
    const { data } = await customAxios.get("/auth-user/");
    Dispatch("user", { user: data });
    return data;
  } catch (error) {
    console.log("something", error);
    // navigate('/authentication/login')
    // Dispatch("changeHomePage", { homePage: "login" });
  }
};

const loginUser = async (formData, showAlert, switchTypeNavigate, Dispatch) => {
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

    await getLoggedInUser(Dispatch);
    showAlert("", "login successfull");
    switchTypeNavigate(null, "/");
  } catch (error) {
    const {
      data: { detail },
    } = error.response;
    showAlert("", detail || "something");
  }
};

export default loginUser;
