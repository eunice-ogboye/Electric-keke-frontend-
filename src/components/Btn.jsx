import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Btn = ({
  text,
  type = "default",
  size = "default",
  radius = "default",
  disabled,
  handleClick,
  fixed,
  to,
  variant
}) => {
  const sizing = {
    default: "h-14 w-[171px]",
    full: "h-14 w-full",
    sm: "h-12 w-[123px]",
    md: "h-8 w-[123px]",
    "md-full": "h-8 w-full",
    lg: "",
  };
  const rounding = {
    default: "rounded-normal",
  };
  const typing = {
    default: "primary-btn",
    secondary: "secondary-btn",
    rider: 'rider-btn'
  };
  const Btn = () => {
    return (
      <Button
        className={`${sizing[size]} ${rounding[radius]} ${typing[type]} text-eiteen text-white font-medium disabled:bg-gray-400`}
        disabled={disabled}
        onClick={handleClick}
        variant={variant}
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
        onClick={handleClick}
      >
        {text}
      </Link>
    );
  };

  const CancleBtn = () => {
    return (
      <button
        className={`rounded-full  p-1 ${
          fixed ? null : "absolute top-2 right-2 bg-neutral/40"
        }`}
        onClick={handleClick}
      >
        <img src="/cancel.svg" alt="cancel" />
      </button>
    );
  };

  return to ? LinkBtn() : type === "cancel" ? CancleBtn() : Btn();
};

export default Btn;
