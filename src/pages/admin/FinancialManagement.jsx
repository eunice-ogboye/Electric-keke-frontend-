import React from "react";
import DisplayTable from "../../components/admin/DisplayTable";
import Pagination from "../../components/admin/Pagination";
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
