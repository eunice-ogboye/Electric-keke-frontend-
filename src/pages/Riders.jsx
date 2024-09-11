import Btn from "../components/Btn";
import { Section } from "../shared-layout";
import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Riders = () => {
  // const navigate = useNavigate();
  const [ridersTitle, setRidersTitle] = useState("Available Riders");
  const switchRiderTitle = (title) => {
    setRidersTitle(title);
  };

  return (
    <Section darkLogo={true}>
      <div className="px-1 py-20 md:pt-48 md:pb-10">
        <Outlet context={{ ridersTitle, switchRiderTitle }} />
      </div>
    </Section>
  );
};

export default Riders;
