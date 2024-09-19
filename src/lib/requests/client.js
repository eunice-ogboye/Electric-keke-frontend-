import axios from "axios";
import { addItemToLs, clearLs, deletItemFromLs, getItemFromLs } from "../ls";
import isTokenValid from "./auth/checkJwtValidity";
import refreshAccess from "./auth/refreshAccess";

const client = axios.create({
  baseURL: "/api",
});

client.interceptors.request.use(
  async (req) => {
    // console.log(req);
    const accessToken = getItemFromLs("accessToken");
    const tokenValidity = isTokenValid(accessToken);
    console.log(tokenValidity);
    // if (accessToken) {
    //   refreshToken();
    //   if (!tokenValidity) {
    //     //refrsh token
    //   }
    //   req.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return req;
  },
  (err) => Promise.reject(err)
);

// client.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     return Promise.reject(err);
//   }
// );

export const clientRequest = async ({ ...options }) => {
  console.log(options);

  const accessToken = getItemFromLs("accessToken");
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

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
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);

        // clearLs();

        return Promise.reject(err);
      }
    }

    throw new Error("request error");
  };
  return client(options).then(onSuccess).catch(onError);
};
