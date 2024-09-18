import React from "react";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";
import { useOutletContext } from "react-router-dom";

const UserManagement = () => {
  const { contentsToDisplay } = useOutletContext();
  console.log(contentsToDisplay);
return (
    <div className="mt-8">
      <DisplayTable contentsToDisplay={contentsToDisplay} contentType="user" />
      <Pagination />
    </div>
  );
};

export default UserManagement;
