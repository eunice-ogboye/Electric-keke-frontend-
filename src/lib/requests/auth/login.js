import { addItemToLs } from "../../ls";
import { showMe } from "./showMe";
import { clientRequest } from "../client";

const loginUser = async (formData, showAlert) => {
  const { username, password, checkPass } = formData;
  const isPasswordMatched = password === checkPass;

  if (!isPasswordMatched) {
    showAlert("confirm password matches");
    throw new Error("password doesnt match");
  }

  try {
    const { data } = await clientRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });

    const { access: accessToken, refresh: refreshToken } = data;
    // tokens
    addItemToLs("accessToken", accessToken);
    addItemToLs("refreshToken", refreshToken);
    // user
    const user = await showMe();
    const { role, id } = user;
    addItemToLs("user", user);
    // alert success
    showAlert("login successfull");
    return role === "User"
      ? "/"
      : role === "Rider"
      ? `/driver/${id}`
      : "/admin";
  } catch (error) {
    console.log(error);
    const {
      data: { detail },
    } = error.response;
    showAlert(detail || "something");
    throw new Error("Credentials have issue");
  }
};

export default loginUser;
