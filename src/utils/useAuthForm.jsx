import { useSelector } from "react-redux";
import dispatchables from "./dispatchables";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAuthContext } from "../contexts/AuthContext";
import { addItemToLs } from "../lib/ls";
import { Login, RequestOtp } from "../lib/requests/auth";

const useAuthFormDefault = () => {
  const { AuthenticateLogin } = useGlobalAuthContext();

  const formData = useSelector((state) => state.formData);

  const authenticationPage = useSelector((state) => state.global.authPage);

  const { showAlert, changeAuthenticationPage, switchVerificationType } = dispatchables();

  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const goToNextPage = (link, authPage) => {
    navigate(link);
    changeAuthenticationPage(authPage);
    setDisabled(true);
  };

  useEffect(() => {
    const {
      fullname,
      email,
      password,
      checkPass,
      phone,
      state,
      address,
      username,
    } = formData;

    if (
      authenticationPage === "register" &&
      fullname &&
      email &&
      password &&
      checkPass
    ) {
      setDisabled(false);
    } else if (
      authenticationPage === "login" &&
      username &&
      password &&
      checkPass
    ) {
      setDisabled(false);
    } else if (authenticationPage === "complete" && phone && state && address) {
      setDisabled(false);
    } else if (authenticationPage === "forget" && username) {
      setDisabled(false);
    } else if (authenticationPage === "new" && password && checkPass) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, checkPass, username, email } = formData;
    switch (authenticationPage) {
      case "register":
        // check password matches
        const passwordMatches = password === checkPass;
        if (!passwordMatches) {
          showAlert("password unmatch");
          return;
        }
        addItemToLs("user-email", email);
        return goToNextPage("/authentication/complete-profile", "complete");

      case "complete":
        return goToNextPage("/authentication/choose-otp-method", "otpMethod");

      case "forget":
        addItemToLs("user-email", username);
        try {
          const { detail } = await requestOtp({ username });
          showAlert(detail);
          switchVerificationType('update-password')
          changeAuthenticationPage('update-password');
          return navigate("/authentication/verification");
        } catch (error) {
          showAlert("error fetching otp");
          return;
        }

      case "new":
        // console.log(username);
        try {
          const { detail } = await resetPassword({
            username,
            password,
            re_password: checkPass,
          });
          showAlert(detail);
          return goToNextPage("/authentication/login", "login");
        } catch (error) {
          console.log(error);
          showAlert("error reseting passcode");
        }
        return;

      case "login":
        try {
          const data = await Login(formData);
          AuthenticateLogin();
          showAlert('Login Success')
          return goToNextPage(data, null);
        } catch (error) {
          console.log(error);
          showAlert(error.message)
          return;
        }
      // return;
      default:
        throw new Error("i dont know what action to take");
    }
  };

  return {
    formData,
    changeAuthenticationPage,
    disabled,
    handleSubmit,
  };
};

export default useAuthFormDefault;
