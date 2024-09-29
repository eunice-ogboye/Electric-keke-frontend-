import { useState } from "react";
import FormRow from "../shared/FormRow";
import DatePicker from "../shared/DatePicker";
import CustomSelectItem from "../shared/CustomSelectItem";
import SelectInput from "../shared/SelectInput";
import Btn from "../shared/Btn";
import generateTime from "../../utils/generateTime";
import generateCount from "../../utils/generateCount";

const ScheduleForm = ({
  scheduleType,
  scheduleFormData,
  handleDate,
  handleChange,
  setQuantity,
  setTime,
  setScheduleFormData,
}) => {
  return (
    <form className="schedule-form" onSubmit={(e) => e.preventDefault()}>
      <FormRow
        name="origin"
        label="Enter Your Location"
        formRowContainer="font-inter"
        value={scheduleFormData.origin}
        handleChange={handleChange}
        inputclass="schedule-input"
      />
      <FormRow
        name="destination"
        label="Enter Your Destination"
        formRowContainer="font-inter"
        value={scheduleFormData.destination}
        handleChange={handleChange}
        inputclass="schedule-input"
      />
      <FormRow
        label="Select Date"
        children={<DatePicker handleDate={handleDate} />}
        formRowContainer="font-inter"
        inputclass="schedule-input"
      />
      <FormRow
        label="Select Time"
        // value={scheduleFormData.time}
        children={
          <SelectInput
            placeholder="00:00"
            label="Time"
            formRowContainer="font-inter"
            handleFunc={setTime}
            children={<CustomSelectItem items={generateTime()} />}
          />
        }
        inputclass="schedule-input"
      />
      <FormRow
        label={
          scheduleType === "ride" ? "Number of Passengers" : "Number of Goods"
        }
        children={
          <SelectInput
            placeholder="01"
            label={scheduleType === "ride" ? "total persons" : "total goods"}
            handleFunc={setQuantity}
            children={<CustomSelectItem items={generateCount()} />}
          />
        }
        formRowContainer="font-inter"
        inputclass="schedule-input"
      />
      {scheduleType === "ride" ? (
        <FormRow
          label="Share a Ride"
          children={
            <div className="flex items-end justify-between gap-4 border">
              <Btn
                text="Yes"
                type="secondary"
                handleClick={() =>
                  setScheduleFormData((prev) => ({ ...prev, share: "Yes" }))
                }
              />
              <Btn
                text="No"
                type="secondary"
                handleClick={() =>
                  setScheduleFormData((prev) => ({ ...prev, share: "No" }))
                }
              />
            </div>
          }
          formRowContainer="font-inter"
          inputclass="schedule-input"
        />
      ) : (
        <FormRow
          label="Type of goods (no hazardous or illegal goods accepted)"
          children={
            <SelectInput
              placeholder="Select from the options below"
              label="Goods Category"
            />
          }
          labelClass="text-xs tablet:text-xs"
          formRowContainer="font-inter"
          inputclass="schedule-input"
        />
      )}
    </form>
  );
};

export default ScheduleForm;
