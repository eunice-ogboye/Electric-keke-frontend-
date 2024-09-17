import React from "react";
import UsersDisplay from "./UsersDisplay";
import Pagination from "./Pagination";
import { useOutletContext } from "react-router-dom";

const UserManagement = () => {
  const {usersToShow} = useOutletContext();
  console.log(usersToShow)
  return (
    <>
      <div className="mt-8">
        <UsersDisplay usersToShow={usersToShow} />

        <Pagination />
      </div>
    </>
  );
};

export default UserManagement;
