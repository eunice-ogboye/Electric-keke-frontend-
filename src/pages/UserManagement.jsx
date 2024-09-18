import React from "react";
import DisplayTable from "../components/Admin/DisplayTable";
import Pagination from "../components/Admin/Pagination";
import { useOutletContext } from "react-router-dom";

const UserManagement = () => {
  const { usersToShow } = useOutletContext();
  console.log(usersToShow);
  return (
    <div className="mt-8">
      <DisplayTable contentToShow={usersToShow} view="user" />
      <Pagination />
    </div>
  );
};

export default UserManagement;
