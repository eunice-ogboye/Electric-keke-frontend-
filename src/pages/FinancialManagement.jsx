import React from "react";
import DisplayTable from "../components/Admin/DisplayTable";
import Pagination from "../components/Admin/Pagination";
import { useOutletContext } from "react-router-dom";

const FinancialManagement = () => {
  const {} = useOutletContext();
  return (
    <div>
      <DisplayTable view="finances" contentToDisplay="All" />
      <Pagination />
    </div>
  );
};

export default FinancialManagement;
