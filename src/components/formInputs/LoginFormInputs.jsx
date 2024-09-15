import React from "react";
import FormRow from "../FormRow";

const LoginFormInputs
 = () => {
  return (
    <div className="r-form-body">
      <FormRow
        type="text"
        label="Email or Phone number"
        name="username"
        // value={formData.username}
        // handleChange={handleChange}
        auth
      />
      <FormRow
        type="password"
        label="Password"
        name="password"
        // value={formData.password}
        // handleChange={handleChange}
        auth
      />
      <FormRow
        type="password"
        label="Confirm Password"
        name="checkPass"
        // value={formData.checkPass}
        // handleChange={handleChange}
        auth
      />
    </div>
  );
};

export default LoginFormInputs
;
