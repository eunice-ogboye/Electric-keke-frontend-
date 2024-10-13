import { useState } from "react";
import {
  FilterGroup,
  FilterGroupItem,
  FilterSheet,
  FilterTrigger,
} from "./_custom-ui/Filter";
import Btn from "./btn/Btn";
import { FilterIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CustomFilter = ({ filterGroups, handleClick }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [timing, setTiming] = useState(null);

  return (
    <FilterSheet>
      <FilterTrigger onClick={() => setShowFilter(!showFilter)}>
        <Btn
          text="Filter"
          icon={<FilterIcon />}
          styling="gap-2 bg-transparent text-black border-[0.5px] rounded-s"
        />
      </FilterTrigger>

      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            className="absolute bg-white z-10 min-w-[185px] shadow-2xl rounded-[6px] p-1"
            onAnimationStart={() => {
              setTiming(
                setTimeout(() => {
                  setShowFilter(false);
                }, 5000)
              );
            }}
            onMouseEnter={() => setTiming(null)}
            onMouseLeave={() => setShowFilter(false)}
          >
            {filterGroups &&
              filterGroups.map((group) => {
                return (
                  <FilterGroup
                    label={group.label}
                    labelStyle={group.labelStyle}
                    key={group.label}
                    styling={group.styling}
                    container_styles={group.option_container}
                  >
                    {group.options.map((option) => {
                      return (
                        <FilterGroupItem
                          styling={group.itemStyle}
                          onClick={() => handleClick(option)}
                        >
                          {option}
                        </FilterGroupItem>
                      );
                    })}
                  </FilterGroup>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </FilterSheet>
  );
};

export default CustomFilter;
