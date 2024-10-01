import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  const decoded = jwtDecode(token);
  const { exp } = decoded;
  const currentTimeInSeconds = new Date().getTime() / 1000;
  const tokenDuration = exp - currentTimeInSeconds;

  const tokenDurationInMins = (tokenDuration/1000 * 60);
  console.log(`${tokenDurationInMins} mins`)
  

  return tokenDuration > 50 ? true : false;
};

export default isTokenValid;
