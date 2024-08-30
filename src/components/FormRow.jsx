import React from "react";

const FormRow = ({ label, name, type, handleChange, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        className="border px-4 py-2 rounded-md"
      />
    </div>
  );
};

export default FormRow;
