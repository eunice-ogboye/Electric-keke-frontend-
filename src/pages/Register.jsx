import { useGlobalContext } from "../context";
import ReusableForm from "../components/ReusableForm";
import { useTitle } from "../lib/hooks";
import React from "react";
import { useEffect } from "react";

const Register = () => {
  useTitle("Register");
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({type: 'changeBg', payload: {imageType: 'register'}})
  }, [])
  
  return (
    <div className="py-5 px-20 w-1/2">
      <ReusableForm />
    </div>
  );
};

export default Register;
