import Btn from "@/components/btn/Btn";
import Choose from "@/components/Choose";
import dispatchables from "@/utils/dispatchables";


const PayModalBottom = ({ methodOfPayment }) => {
  const { showAlert } = dispatchables();
  return (
    <>
      {methodOfPayment === "card" && (
        <Choose
          containerClass="grid grid-cols-2 gap-x-2 border"
          choice1txt="Confirm"
          choice2txt="Cancel"
          btnClass="btn btn--lg rounded-full"
          addedClass1="btn--primary"
          addedClass2="btn--secondary"
          handleChoice1={() => {
            showAlert("save card details");
          }}
          handleChoice2={() => {
            showAlert("cancel card");
          }}
        />
      )}
      {methodOfPayment === "bank" && (
        <Btn
          text="Confirm"
          styling="btn btn--lg btn--primary w-full rounded-full"
          onClick={() => {
            showAlert("added bank details");
          }}
        />
      )}
    </>
  );
};

export default PayModalBottom;
