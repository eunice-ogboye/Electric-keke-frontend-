import React from "react";
import DisplayTable from "../components/Admin/DisplayTable";
import Pagination from "../components/Admin/Pagination";
import { useOutletContext } from "react-router-dom";

const FinancialManagement = () => {
  const { contentsToDisplay } = useOutletContext();
  return (
    <>
      <DisplayTable
        contentType="finances"
        contentsToDisplay={contentsToDisplay}
      />
      <Pagination />
    </>
  );
};

export default FinancialManagement;
