import React from "react";
import OtpInput from "../OtpInput";

const VerificationInputs = ({value}) => {
  // formDAta.otpvalue
  return (
    <div className="r-form-body-margin w-full md:w-[396px] mx-auto border-8">
      <div className="flex-center">
        <OtpInput
          value={formData.otpValue}
          handleChange={(value) => {
            setFormData((prev) => ({ ...prev, otpValue: value }));
            // console.log(formData)
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <p>
          Didn't receive an OTP?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            // onClick={async () => {
            //   await requestOtp(showAlert, formData);
            // }}
          >
            Resend
          </span>
        </p>
        <p className="">00:30</p>
      </div>
    </div>
  );
};

export default VerificationInputs;
