import React from "react";
import { EyeIcon } from "lucide-react";

const FormRow = ({
  name,
  label,
  labelTextSize,
  type = "text",
  children,
  value,
  handleChange,
  formRowContainer,
  icon,
  auth,
}) => {
  return (
    <div className={`${formRowContainer}`}>
      {label && (
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
            className={`${auth ? "auth-input" : "schedule-input"} ${icon && "pl-96"}`}
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

export default FormRow;
