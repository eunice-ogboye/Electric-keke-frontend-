import axios from "axios";

const getToken = (name) => {
  const retrieveToken = localStorage.getItem(name);
  if (!retrieveToken) {
    console.log("no token found for", name);
  }
  const token = JSON.parse(retrieveToken);
  return token;
};

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
    const accessToken = getToken("accessToken");

    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log("the request", req);
    return req;
  },
  (err) => {
    // console.log(err.status, 'request error stats');
    return Promise.reject(err);
  }
);

customAxios.interceptors.response.use(
  (res) => {
    console.log("interceptors response");
    console.log("the response", res);
    return res;
  },
  async (err) => {
    console.log("accessToken expired, going to refresh");
    const originalRequest = err.config;
    console.log(err.status);
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // console.log(originalRequest.url)
      // if (originalRequest.url === "/auth-user/") {
      //   console.log('jose')
      //   return Promise.reject(err);
      // }

      try {
        const refreshToken = getToken("refreshToken");
        const {
          data: { access: accessToken, refresh: newRefreshToken },
        } = await axios.post("/api/token/refresh/", {
          refresh: refreshToken,
        });
        // console.log(data)

        console.log(accessToken, refreshToken);
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
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
