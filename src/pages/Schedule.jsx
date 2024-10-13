import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import dispatchables from "@/utils/dispatchables";
import ScheduleBoard from "@/features/scheduling/components/ScheduleBoard";
import ScheduleForm from "@/features/scheduling/components/ScheduleForm";
import Section from "@/layouts/Section";
import Togglers from "@/components/Togglers";

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
      <div className="home-pad pt-20 md:pt-[132px] pb-10">
        <h2 className="schedule-title">Eco Schedule</h2>
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

        <div className="schedule-tags-container">
          {["Details", "Long distance", "Short Distance", "Rating"].map(
            (item) => {
              return (
                <div key={item} className="schedule-tags">
                  {item}
                </div>
              );
            }
          )}
        </div>

        <ScheduleForm
          scheduleType={scheduleType}
          scheduleFormData={scheduleFormData}
          handleDate={handleDate}
          handleChange={handleChange}
          setTime={setTime}
          setQuantity={setQuantity}
          setScheduleFormData={setScheduleFormData}
        />

        <ScheduleBoard scheduleFormData={scheduleFormData} />
      </div>
    </Section>
  );
};

export default Schedule;
