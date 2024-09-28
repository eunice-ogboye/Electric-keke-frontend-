import { useNavigate } from "react-router-dom";
import dispatchables from "../utils/dispatchables";

const useReroute = () => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const rerouting = (errCode) => {
    if (errCode === 500) {
      showAlert("Error in Connection");
      navigate("/ie/kadkjakda");
    }
  };

  return rerouting;
};

export default useReroute;
