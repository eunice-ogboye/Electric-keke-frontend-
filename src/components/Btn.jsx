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
}) => {
  const sizing = {
    default: "h-14 w-[171px]",
    full: "h-14 w-full",
    sm: "h-12 w-[123px]",
    md: "h-8 w-[123px]",
    "md-full": "h-8 w-full",
    lg: "",
    driver: "h-[34px] w-[95px] md:h-14 md:w-[171px]",
    none: 'h-fit w-fit'
  };
  const rounding = {
    default: "rounded-normal",
  };
  const variants = {
    default: "primary-btn",
    secondary: "secondary-btn",
    rider: "rider-btn",
    invisible: "bg-transparent",
  };
  const Btn = () => {
    return (
      <Button
        className={`${sizing[size]} ${rounding[radius]} ${
          variants[type]
        } text-eiteen ${
          type === "invisible" ? "text-black" : "text-white"
        } font-medium disabled:bg-gray-400 transition-all duration-300`}
        disabled={disabled}
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
        className={`${sizing[size]} ${rounding[radius]} ${variants[type]} text-eiteen text-white font-medium flex-center`}
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
