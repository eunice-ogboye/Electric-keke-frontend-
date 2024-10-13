import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";
import CustomModal from "@/components/CustomModal";
import Call from "@/assets/svg/Call";

const ContactModal = ({ isModalOpen, openModal, closeModal, smallMedia, connect }) => {
  const { showAlert } = dispatchables();

  const callInApp = () => {
    showAlert("Calling in app");
  };

  const callOffApp = () => {
    showAlert("Calling off app");
  };

  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        icon: (
          <Call
            type={connect ? 'connect' : 'rider'}
            // this below for the tracking
            width={smallMedia ? 24 : 37}
            height={smallMedia ? 24 : 37}
            // this is for the chatting
            size={smallMedia ? 24 : 50}
          
          />
        ),
        styling: "bg-transparent p-0",
      }}
      modalStyling="modal__contact"
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
    >
      <Heading
        className="text-center"
        title="Choose your preferred Call option"
        tclass="text-eiteen"
        description="You can contact the passenger directly through the app or call their phone number."
        dclass="text-sm"
      />

      <div className="mt-6 space-y-6">
        <Btn
          styling="call__opt"
          text="In App Call"
          icon={<Call type="passenger" />}
          onClick={callInApp}
        />
        <Btn
          styling="call__opt"
          text="Call Phone Number"
          icon={<Call type="passenger" />}
          onClick={callOffApp}
        />
      </div>
    </CustomModal>
  );
};

export default ContactModal;
