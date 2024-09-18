import React from "react";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";
import { useOutletContext } from "react-router-dom";

const FinancialManagement = () => {
  return (
    <div>
      <DisplayTable view="finances" contentToShow="All" />
      <Pagination />
    </div>
  );
};

export default FinancialManagement;
