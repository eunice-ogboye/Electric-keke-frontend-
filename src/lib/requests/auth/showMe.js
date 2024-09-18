// import customAxios from "./customAxios";
import { clientRequest } from "../client";


export const showMe = async () => {
  console.log("showing me");
  const options = {
    url: "/auth/auth-user/",
  };
  try {
    const { data } = await clientRequest(options);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error showing user", error);
  }
};
