import React from "react";
import { EyeIcon } from "lucide-react";

const FormRow = ({
  name,
  label,
  labelClass,
  type = "text",
  children,
  value,
  handleChange,
  formRowContainer,
  icon,
  auth,
  inputclass,
  placeholder,
}) => {
  const NormalInput = () => {
    return (
      <div className={`${formRowContainer}`}>
        {label && (
          <label
            htmlFor={name}
            className={`${
              auth
                ? "text-eiteen text-eco-neutral-prime"
                : labelClass
                ? labelClass
                : "text-base"
            } block`}
          >
            {label}
          </label>
        )}

        {children ? (
          children
        ) : (
          <div className="relative">
            {icon && (
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                {icon}
              </div>
            )}
            <input
              type={type}
              name={name}
              id={name}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              className={`${inputclass} ${icon && "pl-96"}`}
              required
            />
            {type === "password" && (
              <div
                className="size-5 absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
                onClick={(e) => {
                  const inputAsSibling = e.currentTarget.previousElementSibling;
                  const checkType = inputAsSibling.type;
                  checkType === "password"
                    ? (inputAsSibling.type = "text")
                    : (inputAsSibling.type = "password");
                }}
              >
                <EyeIcon />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const CheckBoxInput = () => {
    return (
      <div className={formRowContainer}>
        <input type={type} name={name} className="align-baseline" />
        <div>
          <label htmlFor={name}>{label}</label>
          <p className="text-xs mt-5">
            Pay faster on flutterwave . and everywhere Link is accepted.
          </p>
        </div>
      </div>
    );
  };

  return type === "checkbox" ? CheckBoxInput() : NormalInput();
};

export default FormRow;
