import React from "react";
import logo from "../assets/logo.svg";

const InProgress = () => {
  const settings = ["Ride management", "Vehicle tracking", "Payment settings", "Rides and users analytics", "Discount and promotion management"];

  return (
    <section  className="bg-center bg-no-repeat bg-cover h-full"
    style={{ backgroundImage: `url(${logo})` }}>
      <h2 className="text-4xl font-bold mb-12">Settings</h2>
      <ul>
        {settings.map((item, index) => (
          <li key={index} className="mb-6 text-2xl">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InProgress;

