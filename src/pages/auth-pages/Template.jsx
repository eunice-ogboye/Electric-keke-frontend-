import ReusableForm from "../../components/auth/ReusableForm";
import React from "react";
import { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { getItemFromLs } from "../../lib/ls";
import dispatchables from "../../utils/dispatchables";

const Template = () => {
  // redux global and dispatch func
  const { authPage } = useSelector((state) => state.global);
  const { changeAuthenticationPage } = dispatchables();

  useEffect(() => {
    const page = getItemFromLs("authPage");
    changeAuthenticationPage(page);
  }, []);

  return (
    <div className="board-pad w-full md:w-1/2">
      <ReusableForm type={authPage} />
    </div>
  );
};

export default memo(Template);
