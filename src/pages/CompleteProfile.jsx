import { useGlobalContext } from "../context";
import { useEffect } from "react";
import ReusableForm from "../components/ReusableForm";
import React from "react";

const CompleteProfile = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({type: 'changeBg', payload: {imageType: 'complete'}})
  }, [])
  
  return (
    <div className="py-5 px-20 w-1/2">
      <ReusableForm type="complete"/>
    </div>
  );
};

export default CompleteProfile;
