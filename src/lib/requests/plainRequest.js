import axios from "axios";

const plainRequest = axios.create({
  baseURL: "/api",
});

const makePlainRequest = async ({ ...reqOpts }) => {
  console.log(reqOpts)
  const onSuccess = (res) => res;
  const onError = (err) => console.log(err);
  return plainRequest(reqOpts).then(onSuccess).catch(onError);
};

export default makePlainRequest;
