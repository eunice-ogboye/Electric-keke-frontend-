import React, { memo } from "react";
import generateTime from "../../utils/generateTime";
import { SelectItem } from "../ui/select";

const Time = () => {
  const timing = generateTime();
  return (
    <>
      {timing.map((item) => (
        <SelectItem value={item} key={item}>
          {item}
        </SelectItem>
      ))}
    </>
  );
};

export default memo(Time);
