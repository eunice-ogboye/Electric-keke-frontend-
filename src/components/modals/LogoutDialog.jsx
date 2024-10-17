import { Logout } from "@/services/auth";
import DialogModal from "./DialogModal";
import dispatchables from "@/utils/dispatchables";
import { addItemToLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";

const LogoutDialog = () => {
  const { showAlert, loading, unloading } = dispatchables();
  const navigate = useNavigate();

  const handleChoice1 = () => {
    // just close modal here
    showAlert("no");
  };

  const handleChoice2 = () => {
    Logout();
    showAlert("Logged Out");
    addItemToLs("registeringAs", "Login");
    navigate("/onboarding/registration");
  };
  return (
    <DialogModal
      title="Logout of your account"
      description="Are you sure you want to logout?"
      choice1="No"
      choice2="Yes"
      handleChoice1={handleChoice1}
      handleChoice2={handleChoice2}
      choosing
    />
  );
};

export default LogoutDialog;
