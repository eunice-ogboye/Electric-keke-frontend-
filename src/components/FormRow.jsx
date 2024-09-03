import React from "react";

const FormRow = ({ name, label, labelTextSize, type = "text", children, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name} className={`${labelTextSize || "text-base"} block`}>
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
          className="border border-pgreen rounded-[6px] h-[64px] w-full max-w-96"
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
