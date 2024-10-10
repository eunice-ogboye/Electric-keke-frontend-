import { useSelector } from "react-redux";
import dispatchables from "../../utils/dispatchables";
import FormRow from "../shared/FormRow";
import { useEffect } from "react";

const ReusableFormRows = ({ type, standardPassword }) => {
  const { changeAuthFormData } = dispatchables();
  

  const {
    fullname,
    email,
    password,
    re_password,
    username,
    phone,
    state,
    address,
  } = useSelector((state) => state.formData);

  

  return (
    <>
      {type === "register" && (
        <>
          <FormRow
            type="text"
            label="Full Name"
            name="fullname"
            value={fullname}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
          />
          <FormRow
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
          />
        </>
      )}
      {(type === "login" || type === "forget") && (
        <FormRow
          label="Email or Phone No"
          name="username"
          value={username}
          handleChange={changeAuthFormData}
          inputclass="auth-input"
        />
      )}

      {(type === "register" || type === "login" || type === "new") && (
        <>
          <FormRow
            type="password"
            label="Password"
            name="password"
            value={password}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
            showInputAlert={type === "register" && true}
            correct={standardPassword}
          />
        </>
      )}

      {(type === "register" || type === "new") && (
        <FormRow
          type="password"
          label="Confirm Password"
          name="re_password"
          value={re_password}
          handleChange={changeAuthFormData}
          inputclass="auth-input"
        />
      )}

      {type === "complete" && (
        <>
          <FormRow
            label="Phone number"
            name="phone"
            value={phone}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
          />
          <FormRow
            label="State of residence"
            name="state"
            value={state}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
          />
          <FormRow
            label="Address"
            name="address"
            value={address}
            handleChange={changeAuthFormData}
            inputclass="auth-input"
          />
        </>
      )}
    </>
  );
};

export default ReusableFormRows;
