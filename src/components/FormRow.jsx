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
  font
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
        } ${font} block`}
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

// const FormRow = ({ label, name, type, handleChange, value }) => {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={name} className="text-eiteen text-neutral font-normal">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         id={name}
//         onChange={handleChange}
//         value={value}
//         className="border px-4 py-2 rounded-md"
//       />
//     </div>
//   );
// };

export default FormRow;
