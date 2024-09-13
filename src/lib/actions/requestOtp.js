import axios from "axios";

const requestOtp = async (showAlert, formData) => {
  console.log(formData)
  const { message_type = 'email', email } = formData;
  try {
    const {
      data: { detail },
    } = await axios.post("/api/request-new-otp/", {
      message_type,
      username: email,
    });
    console.log(detail);
    showAlert("", detail);
  } catch (error) {
    const {
      data: { detail },
    } = error.response;
    showAlert("", detail || "cannot request otp at the momement");
  }
};

export default requestOtp;
