import React from "react";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";
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
