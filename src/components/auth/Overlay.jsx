import Logo from "../shared/Logo";

const Overlay = ({ className }) => {
  return (
    <div className={className}>
      <Logo className="w-[328px] h-[217px]" />
    </div>
  );
};

export default Overlay;
