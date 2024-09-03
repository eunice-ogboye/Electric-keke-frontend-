import { useGlobalContext } from "../context";
import ReusableForm from "../components/ReusableForm";
import React from "react";
import { useEffect } from "react";

const Template = () => {
  const {
    globalState: { homePage },
    dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const homePage = localStorage.getItem("homePage");
    dispatch({
      type: "changeHomePage",
      payload: { homePage: JSON.parse(homePage) },
    });
  }, []);

  return (
    <div className="board-pad w-full my-dell:w-1/2">
      <ReusableForm type={homePage} />
    </div>
  );
};

export default Template;
