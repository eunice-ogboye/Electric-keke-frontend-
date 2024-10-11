import Filter from "../Filter";
import {
  overview_titles,
  overview_descriptions,
  user_management_filter,
} from "../../constants";
import CustomFilter from "../shared/CustomFilter";
import Btn from "../shared/btn/Btn";

const OverviewInfo = ({ currentPage, changeContentToDisplay }) => {
  return (
    <div className="overview-info">
      <div className="border">
        <h3 className="overview-title">{overview_titles[currentPage]}</h3>

        <p className="text-base">{overview_descriptions[currentPage]}</p>
      </div>

      <div className="flex items-center gap-x-3">
        <Btn
          text="Export"
          className="bg-transparent text-black border-[0.5px]"
        />

        {currentPage === "Overview" ? null : (
          <CustomFilter
            filterGroups={user_management_filter}
            handleClick={(option) => {
              changeContentToDisplay(option);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OverviewInfo;
