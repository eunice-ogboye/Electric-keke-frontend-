import axios from "axios";

const verification = async (otp, showAlert, switchTypeNavigate) => {
  // will change this later
  const identity = localStorage.getItem("userId");
  const id = JSON.parse(identity);
  try {
    const {
      data: { detail },
    } = await axios.post("/api/activate-user/", {
      id,
      otp,
    });
    console.log(data);
    showAlert("", detail);
    switchTypeNavigate("congrats", "/authentication/success");
    localStorage.removeItem("userId");
  } catch (error) {
    const {
      data: { detail },
    } = error.response;
    showAlert("", detail || "verification failed");
  } finally {
    // localStorage.removeItem('userId');
    switchTypeNavigate("congrats", "/authentication/success");
  }
};

export default verification;

/**  36270address
: 
"owerr"
email
: 
"Josemariaofurum@gmail.com"
fullname
: 
"airxist2"
id
: 
"1d692872-2117-4ee9-bab8-2cdfea5997a4"
phone
: 
"081675"
role
: 
"Admin"
state_of_residence
: 
"imo" */
