import { useGlobalContext } from "../context";
import ReusableForm from "../components/ReusableForm";
import React from "react";
import { useEffect } from "react";

const Template = () => {
  const {
    globalState: { authType },
    dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const authType = localStorage.getItem("authType");
    dispatch({
      type: "changeAuthBg",
      payload: { authType: JSON.parse(authType) },
    });
  }, []);

  return (
    <div className="board-pad w-full my-dell:w-1/2">
      <ReusableForm type={authType} />
    </div>
  );
};

export default Template;
