import axios from "axios";
import CustomError from "../error-handler/CustomError";

const plainRequest = axios.create({
  baseURL: "/api",
});

const makePlainRequest = async ({ ...reqOpts }) => {
  console.log(reqOpts);
  const onSuccess = (res) => res;
  const onError = (err) => {
    const {
      data: { detail },
    } = err.response;
    console.log(detail)
    throw new CustomError(detail)
    console.log("................................................");
  };
  return plainRequest(reqOpts).then(onSuccess).catch(onError);
};

export default makePlainRequest;
