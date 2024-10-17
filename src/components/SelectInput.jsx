import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectInput({
  placeholder = "select",
  label,
  children,
  className,
  handleFunc
}) {
  return (
    <Select
      onValueChange={(value) => {
        console.log(value);
        handleFunc(value)
      }}
    >
      <SelectTrigger
        className={
          className ||
          "border border-pgreen rounded-[6px] h-[64px] w-full max-w-96"
        }
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {/* <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
          {/* {label === "Time" && <Time />} */}
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectInput;
