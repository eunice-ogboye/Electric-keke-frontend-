import axios from "axios";

const axiosCustomized = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const axiosCustomizedRequest = ({ ...options }) => {
  return axiosCustomized(options);
};
