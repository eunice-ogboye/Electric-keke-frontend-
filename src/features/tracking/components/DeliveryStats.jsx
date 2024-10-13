import Accept from "@/assets/svg/Accept";
import Battery from "@/assets/svg/Battery";
import Distance from "@/assets/svg/Distance";
import Dropped from "@/assets/svg/Dropped";
import TimeEstimate from "@/assets/svg/TimeEstimate";
import Way from "@/assets/svg/Way";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "@/components/xp/DeliveryProcess";
import React from "react";

const DeliveryStats = ({ role }) => {
  const UserDeliveryStats = () => {
    return (
      <div className="mt-10">
        <DeliveryProcess
          title="Driver Accepts Order"
          icon={
            <Accept
              accept={false}
              // accept={
              //   currentRide.status === "accepted" ||
              //   currentRide.status === "in_progress"
              // }
            />
          }
          desc="Estimated time: 3secs"
        />
        <DeliveryProcessLine success />
        <DeliveryProcess
          title="On the way"
          icon={
            <Way
              way={true}
              // way={
              //   currentRide.status === "in_progress" ||
              //   currentRide.status === "completed"
              // }
            />
          }
          desc="Estimated time: 3secs"
        />
        <DeliveryProcessLine />
        <DeliveryProcess
          title="Drop off"
          icon={<Dropped dropped={true} />}
          // icon={<Dropped dropped={currentRide.status === "completed"} />}
          desc="Estimated time: 3secs"
        />
      </div>
    );
  };

  const RiderDeliveryStats = () => {
    return (
      <div className="mt-10">
        <DeliveryProcess
          title="Battery Level"
          icon={<Battery />}
          desc="0%"
        />
        <DeliveryProcessLine success />
        <DeliveryProcess
          title="Distance to pick up location"
          icon={<Distance />}
          desc="12km"
        />
        <DeliveryProcessLine />
        <DeliveryProcess
          title="Estimated time"
          icon={<TimeEstimate />}
          desc="3secs"
        />
      </div>
    );
  };

  return role === "User" ? UserDeliveryStats() : RiderDeliveryStats();
};

export default DeliveryStats;
