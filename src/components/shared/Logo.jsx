import { Link } from "react-router-dom";

const Logo = ({ logoClassName, className }) => {
  return (
    <Link to="/">
      <div className={className}>
        <img
          src="/logo.svg"
          alt="logo"
          className={logoClassName || "size-full"}
        />
      </div>
    </Link>
  );
};

export default Logo;
