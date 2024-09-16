import axios from "axios";
import { addItemToLs, deletItemFromLs, getItemFromLs } from "../ls";

const client = axios.create({
  baseURL: "/api",
});

export const clientRequest = async ({ ...options }) => {
  console.log(options);
  const accessToken = getItemFromLs("accessToken");
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  const onSuccess = (res) => res;
  const onError = (err) => {
    console.log(err);

    const originalRequest = err.config;
    const status = err.response.status;

    if (status === 401 && !originalRequest._retry) {
      console.log("access token expired", err.status);
      originalRequest._retry = true;

      try {
        const refreshToken = getItemFromLs("refreshToken");

        const {
          data: { access: accessToken, refresh: newRefreshToken },
        } = axios.post("/api/auth/token/refresh");
        const isTheSame = refreshToken === newRefreshToken;
        
        console.log(isTheSame, "is the old rt and new rt same?");

        // update tokens in ls
        addItemToLs("accessToken", accessToken);
        addItemToLs("refreshToken", refreshToken);

        // update the request
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return client(options)
          .then(onSuccess)
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
        deletItemFromLs("accessToken");
        deletItemFromLs("refreshToken");
        deletItemFromLs("user");
        return Promise.reject(err);
      }
    }
    // what action do we want to take
    return err;
  };
  return client(options).then(onSuccess).catch(onError);
};
