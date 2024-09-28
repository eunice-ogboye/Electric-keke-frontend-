import { SelectItem } from "../ui/select";

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
