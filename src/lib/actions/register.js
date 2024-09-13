import axios from "axios";

const registerUser = async (
  formData,
  showAlert,
  switchTypeNavigate,
) => {
  const { fullname, email, password, checkPass, phone, state, address, otp } =
    formData;
  try {
    const { data } = await axios.post("/api/register-user/", {
      fullname,
      address: address,
      state_of_residence: state,
      role: "Admin",
      email,
      phone,
      password,
      re_password: checkPass,
      message_type: otp,
    });
    showAlert("", "OTP Sent for account verification");
    switchTypeNavigate("verification", "/authentication/verification");
    console.log(data);
    localStorage.setItem("userId", JSON.stringify(data.id));
  } catch (error) {
    console.log("jose");
    const { data } = error.response;
    const dataValues = Object.values(data);
    console.log(dataValues);
    showAlert("", dataValues[0] || "something went wrong");
  }
};

export default registerUser;
