import ReusableForm from "../components/ReusableForm";
import React from "react";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemFromLs } from "../lib/ls";
import { changeAuthPage } from "../store/slices/global-slice";

const Template = () => {
  // redux global and dispatch func
  const { authPage } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = getItemFromLs("authPage");
    dispatch(changeAuthPage(page));
  }, []);

  return (
    <div className="board-pad w-full md:w-1/2">
      <ReusableForm type={authPage} />
    </div>
  );
};

export default memo(Template);
