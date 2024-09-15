import axios from "axios";
import { addItemToLs, getItemFromLs } from "../ls";

// const controller = new AbortController();

const customAxios = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
  },
  // withCredentials: true,
  // signal: controller,
});

customAxios.interceptors.request.use(
  async (req) => {
    const accessToken = getItemFromLs("accessToken");

    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
  },
  (err) => {
    // console.log(err.status, 'request error stats');
    return Promise.reject(err);
  }
);

customAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log("accessToken expired, going to refresh", err.status);
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // console.log(originalRequest.url)
      // if (originalRequest.url === "/auth-user/") {
      //   console.log('jose')
      //   return Promise.reject(err);
      // }

      try {
        const refreshToken = getItemFromLs("refreshToken");
        const {
          data: { access: accessToken, refresh: newRefreshToken },
        } = await axios.post("/api/token/refresh/", {
          refresh: refreshToken,
        });
        // console.log(data)

        addItemToLs("accessToken", accessToken);
        addItemToLs("refreshToken", refreshToken);
        // // update axios instance
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return customAxios(originalRequest);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

export default customAxios;
