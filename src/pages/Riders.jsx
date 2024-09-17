import { AnimatePresence } from "framer-motion";
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
      <div className="px-1 py-20 md:pt-48 md:pb-10 home-pad">
        <div className="relative">
          <div className="flex items-center justify-between rider-info">
            <h2 className="font-bold">Available Riders</h2>
            <Btn
              type="cancel"
              // handleClick={goBackToRiderIndex}
              fixed
            />
          </div>
          <AnimatePresence>
            <Outlet context={{ ridersTitle, switchRiderTitle }} />
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Riders;
