import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  const decoded = jwtDecode(token);
  const { exp } = decoded;
  const currentTimeInSeconds = new Date().getTime() / 1000;
  const tokenDuration = exp - currentTimeInSeconds;
  console.log(tokenDuration)

  return tokenDuration > 50 ? true : false;
};

export default isTokenValid;
