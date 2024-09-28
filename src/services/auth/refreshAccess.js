// import axios from "axios";
import { getItemFromLs } from "../../utils/ls";
import { clientRequest } from "../client";

const refreshAccess = async () => {
  const oldRefreshToken = getItemFromLs("refreshToken");
  console.log(oldRefreshToken);
  try {
    const { data } = await clientRequest({
      url: "/auth/token/refresh/",
      method: "post",
      data: { refresh: oldRefreshToken },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error getting refreshing");
  }
};

export default refreshAccess;
