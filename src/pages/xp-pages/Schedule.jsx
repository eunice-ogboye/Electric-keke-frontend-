import SelectInput from "../../components/shared/SelectInput";
import DatePicker from "../../components/shared/DatePicker";
import FormRow from "../../components/shared/FormRow";
import SearchBar from "../../components/shared/SearchBar";
import Togglers from "../../components/shared/Togglers";
import Section from "../../sharedLayouts/Section";
import React, { useCallback, useState } from "react";
import Btn from "../../components/shared/Btn";
import Map from "../../components/shared/Map";
import CustomSelectItem from "../../components/shared/CustomSelectItem";
import generateTime from "../../utils/generateTime";
import generateCount from "../../utils/generateCount";
import dispatchables from "../../utils/dispatchables";

const Schedule = () => {
  const [scheduleType, setScheduleType] = useState("ride");

  const { showAlert } = dispatchables();

  const [scheduleFormData, setScheduleFormData] = useState({
    rider: "",
    booking_type: scheduleType,
    origin: "",
    destination: "",
    price: "",
    package_details: "",
    date: "",
    time: "",
    quantity: 0,
    share: "no",
  });

  const handleChange = (e) => {
    setScheduleFormData({
      ...scheduleFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (value) => {
    const date = value.toDateString();
    setScheduleFormData({ ...scheduleFormData, date });
  };

  const setTime = (time) => {
    setScheduleFormData({ ...scheduleFormData, time });
  };

  const setQuantity = (quantity) => {
    console.log(quantity);
    setScheduleFormData({ ...scheduleFormData, quantity });
  };

  return (
    <Section darkLogo={true}>
      <div className="home-pad pt-3 md:pt-[132px] pb-10">
        <h2 className="hidden md:block font-bold text-center font-josefin">
          Eco Schedule
        </h2>
        <Togglers
          text1="Rides"
          text2="Delivery"
          isConditionTrue={scheduleType === "ride"}
          handleClick1={() => setScheduleType("ride")}
          handleClick2={() => setScheduleType("delivery")}
          color="color2"
          font="font-nunito"
        />

        <SearchBar className="hidden w-full max-w-[865px] border-2 mt-8 rounded-[40px] p-1 md:flex items-center justify-between mx-auto" />

        <div className="flex items-center justify-between mt-12 max-w-[510px] mx-auto">
          {["Details", "Long distance", "Short Distance", "Rating"].map(
            (item) => {
              return (
                <div
                  key={item}
                  className="text-base flex-center h-8 bg-tertiary px-2 rounded-sm text-[0.63rem] font-nunito"
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-[71px] gap-y-5 gap-x-12"
          onSubmit={(e) => e.preventDefault()}
        >
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
              scheduleType === "ride"
                ? "Number of Passengers"
                : "Number of Goods"
            }
            children={
              <SelectInput
                placeholder="01"
                label={
                  scheduleType === "ride" ? "total persons" : "total goods"
                }
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
              labelClass="text-xs my-dell:text-xs"
              formRowContainer="font-inter"
              inputclass="schedule-input"
            />
          )}
        </form>

        <div className="mt-14">
          <p className="text-2xl font-medium font-inter">Details</p>
          <div className="px-2 py-5 border-eco-green md:flex gap-5">
            <div className="w-8/12 ">
              <div className="md:flex items-start justify-between">
                <div className="space-y-[21px] w-full md:w-5/12 h-[183px]">
                  <div>
                    <p className="text-2xl font-medium font-inter">
                      Your Location
                    </p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.origin}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">
                      Destination
                    </p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.destination}
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px]">
                  <div>
                    <p className="text-2xl font-medium font-inter">Time:</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.time} PM
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">
                      Passengers
                    </p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.quantity}
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px]">
                  <div>
                    <p className="text-2xl font-medium font-inter">Date</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">
                      Ride Sharing
                    </p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px] font-nunito">
                      {scheduleFormData.share}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4 mt-6">
                <Btn
                  text="Proceed"
                  size="sm"
                  handleClick={() => showAlert("processing your schedule")}
                />
                <Btn
                  text="Cancel"
                  type="secondary"
                  size="sm"
                  handleClick={() => showAlert("dropping changes")}
                />
              </div>
            </div>

            <div className="w-full max-w-[504px] h-[285px] mt-10 md:mt-0">
              <Map className="max-w-full h-[285px]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
