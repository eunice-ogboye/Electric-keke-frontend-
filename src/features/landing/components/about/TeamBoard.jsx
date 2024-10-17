import team from "@/mock-data/team_members";
import RegularList from "@/components/_design-patterns/RegularList";
import TeamMember from "./TeamMember";

const TeamBoard = () => {
  return (
    <div className="team-board">
      <RegularList list={team} component={TeamMember} />
    </div>
  );
};

export default TeamBoard;
