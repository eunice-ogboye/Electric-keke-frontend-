import React from "react";
import FormRow from "../shared/FormRow";
import SelectInput from "../shared/SelectInput";
import Btn from "../shared/Btn";

const BankForm = () => {
  return (
    <div className="flex flex-col justify-between mt-10">
      <div className="flex flex-col gap-10">
        <FormRow
          label="Bank"
          children={<SelectInput className="profile-modal-inputs" />}
          formRowContainer="w-full max-w-[411px] mx-auto"
          inputclass="profile-modal-inputs"
        />
        <FormRow
          label="Bank Account"
          placeholder="Enter 10 digit Account number"
          formRowContainer="w-full max-w-[411px] mx-auto"
          inputclass="profile-modal-inputs"
        />
      </div>
    </div>
  );
};

export default BankForm;
