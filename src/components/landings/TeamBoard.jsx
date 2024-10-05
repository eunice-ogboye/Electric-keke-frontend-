import React from "react";
import TeamMember from "./TeamMember";
import team from "../../mock-data/team_members";
import RegularList from "../shared/_design-pattern/RegularList";

const TeamBoard = () => {
  return (
    <div className="team-board">
      <RegularList list={team} component={TeamMember} />
    </div>
  );
};

export default TeamBoard;
