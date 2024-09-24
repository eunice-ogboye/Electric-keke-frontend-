import Logo from "../shared/Logo";

const Overlay = ({ className }) => {
  return (
    <div className={className}>
      <Logo
        className="size-[94px] rounded-full flex-center bg-white"
        logoClassName="w-[76px]"
      />
    </div>
  );
};

export default Overlay;
