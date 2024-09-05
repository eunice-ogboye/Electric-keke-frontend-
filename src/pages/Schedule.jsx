import { SelectInput } from "../components/SelectInput";
import { DatePicker } from "../components/DatePicker";
import FormRow from "../components/FormRow";
import SearchBar from "../components/SearchBar";
import Togglers from "../components/Togglers";
import { Section } from "../shared-layout";
import React, { useState } from "react";
import Btn from "../components/Btn";
import Map from "../components/Map";

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
          font="font-nunito"
        />

        <SearchBar className="w-full max-w-[865px] -2 mt-8 rounded-[40px] p-1 flex items-center justify-between mx-auto" />

        <div className="flex items-center justify-between mt-12 max-w-[510px] mx-auto">
          {["Details", "Long distance", "Short Distance", "Rating"].map(
            (item) => {
              return (
                <div
                  key={item}
                  className="text-base flex-center h-8 bg-tertiary text-tertiary-text px-2 rounded-sm font-nunito"
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
            name="location"
            label="Enter Your Location"
            font="font-inter"
          />
          <FormRow
            name="destination"
            label="Enter Your Destination"
            font="font-inter"
          />
          <FormRow
            label="Select Date"
            children={<DatePicker />}
            font="font-inter"
          />
          <FormRow
            label="Select Time"
            children={<SelectInput placeholder="00:00" label="Time" />}
            font="font-inter"
          />
          <FormRow
            label={
              schedule === "ride" ? "Number of Passengers" : "Number of Goods"
            }
            children={<SelectInput font="font-inter" placeholder="01" label="Time" />}
            font="font-inter"
          />
          {schedule === "ride" ? (
            <FormRow
              label="Share a Ride"
              children={
                <div className="flex items-end justify-between gap-4 ">
                  <Btn text="Yes" type="secondary" />
                  <Btn text="No" type="secondary" />
                </div>
              }
              font="font-inter"
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
              font="font-inter"
            />
          )}
        </form>

        <div className="mt-14">
          <p className="text-2xl font-medium font-inter">Details</p>
          <div className="px-2 py-5 flex gap-5">
            <div className="max-w-[635px]">
              <div className="md:flex items-start justify-between">
                <div className="space-y-[21px] w-full md:w-5/12 h-[183px]">
                  <div>
                    <p className="text-2xl font-medium font-inter">Your Location</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      No. 1 karuga housing, new extension, kaduna.
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">Destination</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      Colab innovation hub, barnawa kaduna
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px]">
                  <div>
                    <p className="text-2xl font-medium font-inter">Time:</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      02:30 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">Passengers</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      01
                    </p>
                  </div>
                </div>

                <div className="space-y-[21px] h-[183px] ">
                  <div>
                    <p className="text-2xl font-medium font-inter">Date</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      02/Aug/2024
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium font-inter">Ride Sharing</p>
                    <p className="text-eiteen font-nunito flex flex-col justify-center h-[46px]">
                      No
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4 mt-6">
                <Btn text="Proceed"  />
                <Btn text="Cancel" type="secondary" />
              </div>
            </div>
            <div className="w-full max-w-[504px] h-[285px]  mt-10 md:mt-0">
              <Map className="max-w-full h-[285px]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
