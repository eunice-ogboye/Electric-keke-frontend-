const { default: axios } = require("axios");

const resetPassword = async () => {
  try {
    const { data } = await axios.post("/api/reset-password/", {
      username,
      password,
      re_password,
    });
  } catch (error) {}
};

export default resetPassword;
