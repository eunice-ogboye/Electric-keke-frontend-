import { Button } from "./ui/button";

const Btn = ({
  text,
  type = "default",
  size = "default",
  radius = "default",
}) => {
  const sizing = {
    default: "h-14 w-[171px]",
    sm: "",
    md: "",
    lg: "",
  };
  const rounding = {
    default: "rounded-normal",
  };
  const typing = {
    default: "primary-btn",
    secondary: "secondary-btn",
  };
  return (
    <Button
      className={`${sizing[size]} ${rounding[radius]} ${typing[type]} text-eiteen text-white font-medium`}
    >
      {text}
    </Button>
  );
};

export default Btn;
