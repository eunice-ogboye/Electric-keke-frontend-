import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Pagination = () => {
  const [pageLimit, setPageLimit] = useState([1, 2, 3]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const first = pageLimit[0];
    const last = pageLimit[2];

    if (page > last) {
      setPageLimit((prev) => {
        const newPageList = [...prev];
        newPageList.shift();
        newPageList.push(page);
        return newPageList;
      });
    }

    if (page < first && page > 0) {
      setPageLimit((prev) => {
        const newPageList = [...prev];
        newPageList.pop();
        newPageList.unshift(page);
        return newPageList;
      });
    }

    if (page <= 1) {
      setPage(1)
    }

  }, [page]);

  return (
    <div className="my-6 flex items-center gap-x-5">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        <img src="/prev.svg" alt="previous" />
        Previous
      </Button>

      <div className="flex items-center gap-x-3">
        {pageLimit.map((item) => {
          return (
            <p className={`${item === page && "border-2 px-2 rounded-sm"}`} key={item}>
              {item}
            </p>
          );
        })}
        ...
      </div>

      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Next
        <img src="/next.svg" alt="next" />
      </Button>
    </div>
  );
};

export default Pagination;
