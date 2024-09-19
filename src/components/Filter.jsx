import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const FilterTrigger = ({ className, handleTrigger }) => {
  return (
    <Button
      className={`flex-center border rounded-[12px] py-2 px-3 gap-x-2 ${className}`}
      onClick={handleTrigger}
    >
      <FilterIcon color="black" size={20} />
      <p className="font-inter text-base text-eco-neutral-thick">Filter</p>
    </Button>
  );
};

const FilterOptions = ({ className, text, runFilter, runFilterBasedOn }) => {
  return (
    <div
      className={cn(
        "h-8 w-full flex items-center hover:scale-110 transition-transform duration-200 cursor-pointer",
        className
      )}
      onClick={() => {
        if (runFilterBasedOn === "User Management") {
          runFilter(text === "Active users" ? "active" : "inactive");
        }
        if (runFilterBasedOn === "Financial Management") {
          runFilter(text);
        }
      }}
    >
      <p className="text-sm ">{text}</p>
    </div>
  );
};

const FilterGroup = ({ className, label, children, containerClass }) => {
  return (
    <div className={cn("w-full px", containerClass)}>
      <p className="text-xs text-eco-neutral-prime">{label}</p>
      <div className={className}>{children}</div>
    </div>
  );
};

export const Filter = ({ className, handleClick, filterBasedOn }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  useEffect(() => {
    console.log(filterBasedOn);
  }, [handleClick]);

  return (
    <div className="relative">
      <FilterTrigger className="bg-eco-white" handleTrigger={toggleShow} />
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ scale: 0 }}
            className={`absolute top-10 right-0 bg-eco-white z-50 border ${className} drop-shadow-2xl`}
            // onClick={handleClick}
          >
            {filterBasedOn === "User Management" && (
              <>
                <FilterGroup label="By Status">
                  <FilterOptions
                    text="Active users"
                    runFilter={handleClick}
                    runFilterBasedOn={filterBasedOn}
                  />
                  <FilterOptions
                    text="Inactive users"
                    runFilter={handleClick}
                    runFilterBasedOn={filterBasedOn}
                  />
                </FilterGroup>

                <FilterGroup
                  label="By Date"
                  className="mt-2 flex items-center justify-between"
                  containerClass="mt-2"
                >
                  <FilterOptions text="From" />
                  <FilterOptions text="To" />
                </FilterGroup>
              </>
            )}
            {filterBasedOn === "Financial Management" && (
              <>
                <FilterGroup label="By Completed">
                  <FilterOptions
                    text="Complete"
                    runFilter={handleClick}
                    runFilterBasedOn={filterBasedOn}
                  />
                  <FilterOptions
                    text="Pending"
                    runFilter={handleClick}
                    runFilterBasedOn={filterBasedOn}
                  />
                </FilterGroup>
                {/* <FilterGroup
                  label="By Date"
                  className="mt-2 flex items-center justify-between"
                  containerClass="mt-2"
                >
                  <FilterOptions text="From" />
                  <FilterOptions text="To" />
                </FilterGroup> */}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
