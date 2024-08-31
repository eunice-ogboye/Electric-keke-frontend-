import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Btn = ({
  text,
  type = "default",
  size = "default",
  radius = "default",
  to,
  handleClick
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
  const Btn = () => {
    return (
      <Button
        className={`${sizing[size]} ${rounding[radius]} ${typing[type]} text-eiteen text-white font-medium`}
        onClick={handleClick}
      >
        {text}
      </Button>
    );
  };

  const LinkBtn = () => {
    return (
      <Link
        to={to}
        className={`${sizing[size]} ${rounding[radius]} ${typing[type]} text-eiteen text-white font-medium flex-center`}
      >
        {text}
      </Link>
    );
  };

  return to ? LinkBtn() : Btn();
};

export default Btn;
