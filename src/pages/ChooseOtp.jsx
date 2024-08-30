import ReusableForm from "../components/ReusableForm";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const ChooseOtp = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({type: 'changeBg', payload: {imageType: 'otp'}})
  }, [])
  
  return (
    <div className="py-5 px-20 w-1/2">
      <ReusableForm type="otp" />
    </div>
  );
};

export default ChooseOtp;
