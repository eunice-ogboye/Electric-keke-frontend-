import React from "react";

const FormRow = ({
  name,
  label,
  labelTextSize,
  type = "text",
  children,
  value,
  handleChange,
  formRowContainer,
  auth,
}) => {
  return (
    <div className={formRowContainer}>
      <label
        htmlFor={name}
        className={`${
          auth
            ? "text-eiteen text-eco-neutral-prime"
            : labelTextSize
            ? labelTextSize
            : "text-base"
        } block`}
      >
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          className={auth ? "auth-input" : "schedule-input"}
        />
      )}
    </div>
  );
};

export default FormRow;
