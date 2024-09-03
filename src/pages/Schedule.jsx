import { SelectInput } from "../components/SelectInput";
import { DatePicker } from "../components/DatePicker";
import FormRow from "../components/FormRow";
import SearchBar from "../components/SearchBar";
import Togglers from "../components/Togglers";
import { Section } from "../shared-layout";
import React, { useState } from "react";
import Btn from "../components/Btn";

const Schedule = ({ children }) => {
  const [schedule, setSchedule] = useState("ride");

  return (
    <Section darkLogo={true}>
      <div className="home-pad pt-3 md:pt-[132px] pb-10">
        <h2 className="font-bold text-center">Eco Schedule</h2>
        <Togglers
          text1="Rides"
          text2="Delivery"
          isConditionTrue={schedule === "ride"}
          handleClick1={() => setSchedule("ride")}
          handleClick2={() => setSchedule("delivery")}
          color="color2"
        />

        <SearchBar className="w-full max-w-[865px] border-2 mt-8 rounded-[40px] p-1 flex items-center justify-between mx-auto" />

        <div className="flex items-center justify-between mt-12 max-w-[510px] mx-auto">
          {["Details", "Long distance", "Short Distance", "Rating"].map(
            (item) => {
              return (
                <div
                  key={item}
                  className="text-base flex-center h-8 bg-tertiary px-2 rounded-sm"
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
          <FormRow name="location" label="Enter Your Location" />
          <FormRow name="destination" label="Enter Your Destination" />
          <FormRow label="Select Date" children={<DatePicker />} />
          <FormRow
            label="Select Time"
            children={<SelectInput placeholder="00:00" label="Time" />}
          />
          <FormRow
            label={
              schedule === "ride" ? "Number of Passengers" : "Number of Goods"
            }
            children={<SelectInput placeholder="01" label="Time" />}
          />
          {schedule === "ride" ? (
            <FormRow
              label="Share a Ride"
              children={
                <div className="flex items-end justify-between gap-4 border">
                  <Btn text="Yes" type="secondary" />
                  <Btn text="No" type="secondary" />
                </div>
              }
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
              labelTextSize="text-xs my-dell:text-xs"
            />
          )}
        </form>

        <div className="mt-14">
          <p className="text-2xl font-medium">Details</p>
          <div className="px-2 py-5 border border-pgreen flex gap-5">
            <div className="max-w-[635px] border-2 border-red-500 ">
              <div className="md:flex items-start justify-between">
                <div className="space-y-[21px] w-full md:w-5/12 h-[183px] border">
                  <div>
                    <p className="text-2xl font-medium">Your Location</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      No. 1 karuga housing, new extension, kaduna.
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium">Destination</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      Colab innovation hub, barnawa kaduna
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px] border">
                  <div>
                    <p className="text-2xl font-medium">Time:</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      02:30 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium">Passengers</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      01
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px] border">
                  <div>
                    <p className="text-2xl font-medium">Date</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      02/Aug/2024
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium">Ride Sharing</p>
                    <p className="text-eiteen flex flex-col justify-center h-[46px]">
                      No
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4 border mt-6">
                <Btn text="Yes" type="secondary" />
                <Btn text="No" type="secondary" />
              </div>
            </div>
            <div className="max-w-[504px] h-[285px] border mt-10 md:mt-0">
              <img src="/schedule-map.svg" alt="schedule map" className="size-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
