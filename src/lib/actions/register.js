import axios from "axios";

const registerUser = async () => {
  try {
    const { data } = await axios.post("/api/register-user/", {
      fullname: "Josemaria",
      address: "3 tajudee",
      state_of_residence: "igboelerin",
      role: "Admin",
      email: "user@example.com",
      phone: "9999999",
      password: "string",
      re_password: "string",
      message_type: "email",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
