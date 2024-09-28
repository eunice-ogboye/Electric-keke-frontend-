import axios from "axios";
import CustomError from "./custom-error/CustomError";

const plainRequest = axios.create({
  baseURL: "/api",
});

const makePlainRequest = async ({ ...reqOpts }) => {
  console.log(reqOpts);
  const onSuccess = (res) => res;
  const onError = (err) => {
    // console.log(err)
    const {
      data: { detail },
    } = err.response;
    console.log(detail);
    throw new CustomError(detail);
  };
  return plainRequest(reqOpts).then(onSuccess).catch(onError);
};

export default makePlainRequest;
