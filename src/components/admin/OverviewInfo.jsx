import React from "react";
import Filter from "../Filter";
import { overview_titles, overview_descriptions } from "../../constants";

const OverviewInfo = ({currentPage, changeContentToDisplay}) => {
  return (
    <div className="overview-info">
      <div className="border">
        <h3 className="overview-title">{overview_titles[currentPage]}</h3>

        <p className="text-base">{overview_descriptions[currentPage]}</p>
      </div>

      <div className="flex items-center gap-x-3">
        <div className="export-action">
          <p className="export-text">Export</p>
          <div>
            <img src="/admin-down.svg" alt="down" />
          </div>
        </div>

        <Filter
          className="w-[177px] p-3 rounded-[6px]"
          filterBasedOn={currentPage}
          changeContentToDisplay={changeContentToDisplay}
        />
      </div>
    </div>
  );
};

export default OverviewInfo;
