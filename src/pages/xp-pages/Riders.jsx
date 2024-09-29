import { AnimatePresence } from "framer-motion";
import Btn from "../../components/shared/Btn";
import Section from "../../sharedLayouts/Section";
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
      <div className="rider-container">
        <div className="relative">

          <div className="rider-sub-header">
            <h2 className="font-bold text-2xl md:text-[28px] lg:text-[2rem]">Available Riders</h2>
            <Btn
              type="cancel"
              fixed
            />
          </div>

          {/* <AnimatePresence> */}
          <Outlet context={{ ridersTitle, switchRiderTitle }} />
          {/* </AnimatePresence> */}
        </div>
      </div>
    </Section>
  );
};

export default Riders;
