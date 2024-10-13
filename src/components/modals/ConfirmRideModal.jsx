import dispatchables from "@/utils/dispatchables";
import CustomModal from "@/components/CustomModal";
import FormRow from "../forms/FormRow";
import Heading from "../Heading";
import Choose from "../Choose";

const ConfirmRideModal = ({ isModalOpen, openModal, closeModal }) => {
  const { showAlert } = dispatchables();

  const handleClick1 = () => {
    showAlert("payment declined");
  };

  const handleClick2 = (e) => {
    showAlert("payment confirmed");
  };

  return (
    <CustomModal
      openModal={openModal}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      modalStyling="modal__confirm"
    >
      <Heading className="text-center" title="Confirm Payment" />
      <form
        className="space-y-2 md:space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormRow
          formRowContainer="flex items-center gap-x-9 p-4"
          type="checkbox"
          showSecureText={false}
          label={
            <>
              I received the exact amount of money: <b>3000 NGN</b>
            </>
          }
          labelClass="text-sm md:text-eiteen"
        />
        <FormRow
          formRowContainer="flex items-center gap-x-9 p-4"
          type="checkbox"
          showSecureText={false}
          label={
            <>
              transaction memo contains this payment ref: <b>ZX3489</b>
            </>
          }
          labelClass="text-sm md:text-eiteen"
        />

        <div>
          <p className="text-sm md:text-eiteen">
            The Payment was made my Susam Michael?
          </p>

          <div className="flex items-center gap-x-5 mt-6">
            <label htmlFor="correct">
              <input type="radio" name="pay" id="correct" className="mr-1" />
              Correct
            </label>

            <label htmlFor="incorrect">
              <input type="radio" name="pay" id="incorrect" className="mr-1" />
              Incorrect
            </label>

            <label htmlFor="unsure">
              <input type="radio" name="pay" id="unsure" className="mr-1" />
              I'm not sure
            </label>
          </div>
        </div>

        <Choose
          containerClass="flex items-center gap-x-6"
          choice1txt="Cancel"
          choice2txt="Confirm"
          btnClass="btn btn--lg w-1/2 "
          addedClass1="bg-neutral-100 text-black"
          addedClass2="btn--primary"
          handleChoice1={handleClick1}
          handleChoice2={handleClick2}
        />
      </form>
    </CustomModal>
  );
};

export default ConfirmRideModal;
