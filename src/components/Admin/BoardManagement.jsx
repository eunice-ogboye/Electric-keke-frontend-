import { user_dashboard } from "../../constants";
import Board from "./Board";

const BoardManagement = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
      {user_dashboard.map((item) => {
        return <Board key={item.title} {...item} />;
      })}
    </div>
  );
};

export default BoardManagement;
