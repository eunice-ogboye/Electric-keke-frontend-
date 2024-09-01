import Btn from "../components/Btn";
import { Section } from "../shared-layout";
import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Riders = () => {
  const navigate = useNavigate();
  const [ridersTitle, setRidersTitle] = useState("Available Riders");
  const switchRiderTitle = (title) => {
    setRidersTitle(title);
  };

  return (
    <Section darkLogo={true}>
      <div className="home-pad pt-48">
        <Outlet context={{ ridersTitle, switchRiderTitle }} />
      </div>
    </Section>
  );
};

export default Riders;
