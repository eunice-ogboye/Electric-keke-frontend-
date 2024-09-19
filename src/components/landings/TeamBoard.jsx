import React from "react";
import TeamMember from "./TeamMember";
import team from "../../mock-data/team_members";

const TeamBoard = () => {
  return (
    <div className="team-board">
      {team.map((item) => (
        <TeamMember key={item.name} {...item} />
      ))}
    </div>
  );
};

export default TeamBoard;
