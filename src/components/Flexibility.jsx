import { animateFromPosition } from "../animate";
import { useGSAP } from "@gsap/react";
import React from "react";

const Flexibility = () => {
  useGSAP(() => {
    animateFromPosition('.flexible', {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: '.flexible',
        start: 'top center'
      }
    })
  }, [])
  return (
    <div className="flexible">
      <h2 className="text-eco-green font-bold text-[2rem] font-montserrat">
        Flexibility
      </h2>
      <p className="text-eco-neutral-prime font-montserrat">
        At EcoRide, we understand the importance of work-life balance. That is
        why we offer flexible working hours, allowing you to choose your own
        schedule. whether you prefer to drive during the day, night, or just
        weekends, the choice is entirely yours.
      </p>
    </div>
  );
};

export default Flexibility;
