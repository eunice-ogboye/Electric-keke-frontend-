import dispatchables from "@/utils/dispatchables";
import Btn from "../btn/Btn";
import Heading from "../Heading";
import NewModal from "../CustomModal";
import Call from "@/assets/svg/Call";

const ContactModal = () => {
  const { showAlert } = dispatchables();

  const callInApp = () => {
    showAlert("Calling in app");
  };

  const callOffApp = () => {
    showAlert("Calling off app");
  };

  return (
    <NewModal
      trigger={Btn}
      triggerProps={{ icon: <Call type="rider" />, styling: "bg-transparent" }}
      modalStylling="modal__contact"
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
    </NewModal>
  );
};

export default ContactModal;
