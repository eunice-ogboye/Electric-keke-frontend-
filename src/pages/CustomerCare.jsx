import Messaging from "../components/Messaging";
import ChatBoard from "../components/ChatBoard";
import { Section } from "../shared-layout";
import React from "react";

const CustomerCare = () => {
  return (
    <Section darkLogo={true}>
      <div className="home-pad py-5 md:pt-[145px]">
        <div className="border-b-2 border-b-pgreen">
          <h2 className="text-2xl lg:text-5xl font-bold text-center">
            Help & Support Center
          </h2>
          <p className="text-center text-2xl font-nunito">Customer Service</p>
        </div>
        <ChatBoard />
        <Messaging />
      </div>
    </Section>
  );
};

export default CustomerCare;
