import { useGlobalContext } from "../context";
import ReusableForm from "../components/ReusableForm";
import React from "react";
import { useEffect } from "react";

const Template = () => {
  const {
    globalState: { onboardingType },
    dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const onboardingType = localStorage.getItem("onboardingType");
    dispatch({
      type: "changeBg",
      payload: { onboardingType: JSON.parse(onboardingType) },
    });
  }, []);

  return (
    <div className="board-pad w-1/2">
      <ReusableForm type={onboardingType} />
    </div>
  );
};

export default Template;
