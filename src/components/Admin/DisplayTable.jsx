import React, { useEffect, useState } from "react";
import users from "../../mock-data/users";
import finances from "../../mock-data/finances";
import UserLoading from "../ErrorBoundary/Fallbacks/UserLoading";
import Table, { TableContent } from "./Table";
import {
  finance_management_tablehead,
  user_management_tablehead,
} from "../../constants";

const fetchContent = (time, option, contentType) => {
  console.log(contentType)
  console.log(contentType)
  return new Promise((resolve) => {
    setTimeout(() => {
      let contents;
      if (option === "All") {
        if (contentType === 'user') {
          contents = users;
        } else {
          contents = finances
        }
      } else {
        if (contentType === 'user') {
          contents = users.filter((item) => item.status === option);
        } else {
          contents = finances.filter((item) => item.status === option);
        }
      }
      resolve(contents);
    }, time);
  });
};

const DisplayTable = ({ contentsToDisplay, contentType }) => {
  const [loading, setLoading] = useState(true);
  const [contents, setClients] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getContents = async () => {
      try {
        const tableContents = await fetchContent(5000, contentsToDisplay, contentType)
          .then((res) => res)
          .catch((err) => console.log(err));
        setLoading(false);
        setClients(tableContents);
      } catch (error) {
        console.log(error);
      }
    };

    getContents();
  }, [contentsToDisplay]);

  return (
    <div className="mt-8 border">
      <Table
        tableheadContent={
          contentType === "user"
            ? user_management_tablehead
            : finance_management_tablehead
        }
      />
      {loading ? (
        <UserLoading />
      ) : (
        <>
          {contents.length < 1 ? (
            <p className="text-center">No data for ...</p>
          ) : (
            <>
              {contents.map((item, index) => {
                return (
                  <TableContent
                    key={item.id + index}
                    {...item}
                    delay={index}
                    userContent={contentType === "user" ? true : false}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayTable;

/**<SingleUser key={item.name} {...item} delay={index} />; */
