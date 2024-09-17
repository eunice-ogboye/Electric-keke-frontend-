import React, { useEffect, useState } from "react";
import users from "../../mockData/users";
import SingleUser from "./SingleUser";
import UserLoading from "../ErrorBoundary/Fallbacks/UserLoading";

const fetchUsers = (time, option) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let clients;
      if (option === "All") {
        clients = users;
      } else {
        clients = users.filter((item) => item.status === option);
      }
      resolve(clients);
    }, time);
  });
};

const UsersDisplay = ({ usersToShow }) => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getUsers = async () => {
      try {
        const users = await fetchUsers(5000, usersToShow)
          .then((res) => res)
          .catch((err) => console.log(err));

        setLoading(false);
        setClients(users);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, [usersToShow]);

  return (
    <div className="mt-8 border">
      <div className="grid grid-cols-9 h-14 place-items-center">
        <div>
          <p className="font-semibold">User ID</p>
        </div>

        <div className="col-span-3 justify-self-start">
          <p className="font-semibold">Name</p>
        </div>

        <div className="col-span-2 justify-self-start">
          <p className="font-semibold">Sign Up Date</p>
        </div>

        <div className="col-span-2 justify-self-start">
          <p className="font-semibold">Status</p>
        </div>

        <div>
          <p className="font-semibold justify-self-start">Action</p>
        </div>
      </div>
      {loading ? (
        <UserLoading />
      ) : (
        <>
          {clients.map((item, index) => {
            return <SingleUser key={item.name} {...item} delay={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default UsersDisplay;
