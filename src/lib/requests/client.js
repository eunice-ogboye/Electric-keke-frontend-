import axios from "axios";
import { addItemToLs, clearLs, deletItemFromLs, getItemFromLs } from "../ls";
import isTokenValid from "./auth/checkJwtValidity";
import refreshAccess from "./auth/refreshAccess";
import CustomError from "../error-handler/CustomError";

const client = axios.create({
  baseURL: "/api",
});

client.interceptors.request.use(
  async (req) => {
    const accessToken = getItemFromLs("accessToken");
    const tokenValidity = isTokenValid(accessToken);
    console.log(tokenValidity);
    return req;
  },
  (err) => Promise.reject(err)
);

export const clientRequest = async ({ ...options }) => {
  console.log(options);

  const accessToken = getItemFromLs("accessToken");
  if (accessToken) {
    console.log('we have access token')
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  const onSuccess = (res) => {
    return res;
  };

  const onError = async (err) => {
    console.log(err);
    const originalRequest = err.config;
    const status = err.response.status;

    if (status === 401 && !originalRequest._retry) {
      console.log(
        "access token expired...............................................................................................................................",
        err.status
      );
      originalRequest._retry = true;

      try {
        const { access: accessToken, refresh: refreshToken } =
          await refreshAccess();

        addItemToLs("accessToken", accessToken);
        addItemToLs("refreshToken", refreshToken);

        // update the request
        console.log("hase been refresh");
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return client(originalRequest)
          .then(onSuccess)
          .catch((err) => {
            console.log(err);
            // throws an error if the new request fails to go back to login
            throw new CustomError("Error retry", {
              status,
              code: 3,
            });
          });
      } catch (error) {
        console.log(error);

        // clearLs();

        return Promise.reject(err);
      }
    }

    if (status === 500) {
      throw new CustomError("Internal Server Error", {
        status,
      });
    }

    throw new Error("request error");
  };
  return client(options).then(onSuccess).catch(onError);
};
