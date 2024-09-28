import { useLocation, useNavigate } from "react-router-dom";
import dispatchables from "../utils/dispatchables";
import { addItemToLs } from "../utils/ls";

const useReroute = () => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();
  const { pathname } = useLocation();

  const rerouting = (errCode) => {
    if (errCode === 500) {
      addItemToLs("prev_page", pathname);
      showAlert("Error in Connection");
      navigate("/ie/kadkjakda");
    }
  };

  return rerouting;
};

export default useReroute;
