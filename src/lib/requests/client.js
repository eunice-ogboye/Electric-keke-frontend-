import axios from "axios";
import { getItemFromLs } from "../ls";

const client = axios.create({
  baseURL: "/api",
});

export const clientRequest = async ({ ...options }) => {
  console.log(options)
  const accessToken = getItemFromLs("accessToken");
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  const onSuccess = (res) => res;
  const onError = (err) => {
    console.log(err);
    // what action do we want to take
    return err;
  };
  return client(options).then(onSuccess).catch(onError);
};
