const Logo = ({ logoClassName, className }) => {
  return (
    <div className={className}>
      <img
        src="/logo.svg"
        alt="logo"
        className={logoClassName || "size-full"}
      />
    </div>
  );
};

export default Logo;
