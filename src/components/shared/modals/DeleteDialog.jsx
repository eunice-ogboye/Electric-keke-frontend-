import dispatchables from "@/utils/dispatchables";
import { useNavigate } from "react-router-dom";
import DialogModal from "./DialogModal";
import { DeleteAccount } from "@/services/auth";

const DeleteDialog = () => {
  const { showAlert, loading, unloading } = dispatchables();

  const navigate = useNavigate();

  const handleChoice1 = () => {
    // just close modal here
    showAlert("no");
  };

  const handleChoice2 = async () => {
    console.log('jose')
    try {
      const data = await DeleteAccount();
      unloading();
      console.log(data);
      // showAlert("Deleted Account Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DialogModal
      title="Delete account?"
      description="Are you sure you want to delete account?"
      choice1="No, Cancel"
      choice2="Yes, Delete"
      handleChoice1={handleChoice1}
      handleChoice2={handleChoice2}
    />
  );
};

export default DeleteDialog;
