import axios from "axios";
import { getItemFromLs } from "../../ls";

const refreshAccess = async () => {
  const oldRefreshToken = getItemFromLs("refreshToken");
  console.log(oldRefreshToken);
  try {
    const { data } = await axios.post("/api/auth/token/refresh/", {
      refresh: oldRefreshToken,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("error getting refreshing");
  }
};

export default refreshAccess;
