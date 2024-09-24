import { useSelector } from "react-redux";
import { briefs } from "../../constants";

const CustomBg = () => {
  const { authPage } = useSelector((state) => state.global);

  return (
    <div className="custom-bg">
      <div className="custom-bg-circle" />

      <div className="custom-bg-ellipse">
        <img src="/custom-bg/ellipse2.svg" alt="ellipse" />
      </div>

      <div className="custom-bg-parallelogram">
        <img
          src="/custom-bg/parallelogram.svg"
          alt="parallelogram"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="w-[320px] lg:w-[501px] mx-auto">
        <h1 className="briefing">{briefs[authPage]}</h1>
      </div>
    </div>
  );
};

export default CustomBg;
