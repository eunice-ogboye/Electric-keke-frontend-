import { SelectItem } from "./ui/select";
import React from 'react'

const CustomSelectItem = ({items}) => {
  return (
    <>
      {items.map((item) => (
        <SelectItem value={item} key={item}>{item}</SelectItem>
      ))}
    </>
  );
}

export default CustomSelectItem
