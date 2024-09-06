import React from "react";
import Btn from "./Btn";

const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder="search for help"
        className="w-9/12 pl-4 outline-none border-none"
      />
      <div className="w-3/12">
        <Btn text="Search" size="full" />
      </div>
    </div>
  );
};

export default SearchBar;
