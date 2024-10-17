import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Btn = ({
  text,
  icon,
  position = "left",
  styling,
  addedStyles,
  href,
  linkBtnWidth,
  ...props
}) => {
  const DefaultButton = () => {
    return (
      <Button className={`${styling} ${addedStyles}`} {...props}>
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </Button>
    );
  };

  const ButtonAsLink = () => {
    return (
      <Link to={href} className={linkBtnWidth}>
        <Button className={`${styling} ${addedStyles} w-full`} {...props}>
          {position === "left" && icon}
          {text}
          {position === "right" && icon}
        </Button>
      </Link>
    );
  };

  return href ? ButtonAsLink() : DefaultButton();
};

export default Btn;
