import React from "react";

const TeamMember = ({ photo, name, location, role }) => {
  return (
    <div className="team-member">
      <div className="w-full border">
        <img src={photo} alt={name} className="size-full" />
      </div>

      <div className="team-member__details">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-neutral-500">{location}</p>
        <p className="text-xs text-basic">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
