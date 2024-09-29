import Logo from "../shared/Logo";

const Overlay = ({ className, logo = true }) => {
  return (
    <div className={className}>
      {logo && <Logo
        className="size-[94px] rounded-full flex-center bg-white"
        logoClassName="w-[76px]"
      />}
    </div>
  );
};

export default Overlay;
