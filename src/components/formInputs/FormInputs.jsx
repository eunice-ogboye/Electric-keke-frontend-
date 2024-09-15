import React from "react";
import FormRow from "../FormRow";
import { otp_choice } from "../../constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertUser, hideAlert } from "../../store/slices/global-slice";
import OtpInput from "../OtpInput";
import { changeInputValue } from "../../store/slices/form-data-slice";
import registerUser from "../../lib/requests/auth/register-user";

const FormInputs = ({ type, formData, handleChange, handleOtpType }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  return (
    <div className="r-form-body">
      {type === "otpMethod" && (
        <div className="r-form-body">
          <p>Where should we send your OTP?</p>
          {otp_choice.map((item) => {
            return (
              <div
                key={item.title}
                className="px-4 py-2 flex items-center border-2"
                onMouseOver={() => {
                  handleOtpType(item.title.toLowerCase());
                }}
                onClick={async () => {
                  console.log(formData);
                  try {
                    await registerUser(formData);
                    navigate("/authentication/verification");
                    showAlert('Otp Sent for verification')
                  } catch (error) {
                    console.log(error)
                    // showAlert(error)
                  }
                  // dispatch(changeAuthPage("verification"));
                }}
              >
                <div>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className="ml-3">{item.title}</p>
              </div>
            );
          })}
        </div>
      )}

      {type === "register" && (
        <FormRow
          type="text"
          label="Full Name"
          name="fullname"
          value={formData.fullname}
          handleChange={handleChange}
          auth
        />
      )}
      {type === "register" && (
        <FormRow
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          auth
        />
      )}
      {type === "complete" && (
        <>
          <FormRow
            type="text"
            label="Phone"
            name="phone"
            value={formData.phone}
            handleChange={handleChange}
            auth
          />
          <FormRow
            type="text"
            label="State"
            name="state"
            value={formData.state}
            handleChange={handleChange}
            auth
          />
          <FormRow
            type="text"
            label="Address"
            name="address"
            value={formData.address}
            handleChange={handleChange}
            auth
          />
        </>
      )}
      {type === "login" && (
        <FormRow
          key={type}
          label="Email or Phone No"
          name="username"
          value={formData.username}
          handleChange={handleChange}
          auth
        />
      )}
      {type === "forget" && (
        <FormRow
          key={type}
          label="Email or Phone No"
          name="username"
          value={formData.username}
          handleChange={handleChange}
          auth
        />
      )}

      {(type === "register" || type === "login" || type === "new") && (
        <>
          <FormRow
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
            auth
          />
          <FormRow
            type="password"
            label="Confirm Password"
            name="checkPass"
            value={formData.checkPass}
            handleChange={handleChange}
            auth
          />
        </>
      )}
    </div>
  );
};

export default FormInputs;
