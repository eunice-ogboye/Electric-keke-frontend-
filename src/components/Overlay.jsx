import { LogoPlain } from "@/assets/svg/Logo";

const Overlay = ({ className, logo = true }) => {
  return (
    <div className={className}>
      {logo && (
        <LogoPlain
          styling="size-[94px] rounded-full flex-center bg-white"
          logoStyling="w-[76px]"
        />
      )}
    </div>
  );
};

export default Overlay;
