import FormRow from "../shared/FormRow";
import MasterCircles from "../../assets/svg/MasterCircles";
import Btn from "../shared/Btn";

const CardForm = ({ formData }) => {
  return (
    <>
      <div className="option-card-form-content mt-6">
        <div className="card-content-group">
          <FormRow
            label="Name on card"
            name="name"
            value={formData.name}
            placeholder="susan michael"
            formRowContainer="col-span-2"
            inputclass="profile-modal-inputs"
          />
          <FormRow
            label="Expiry"
            name="expiry"
            value={formData.expiry}
            inputclass="profile-modal-inputs"
          />
        </div>
        <div className="card-content-group">
          <FormRow
            label="Card number"
            name="number"
            value={formData.number}
            placeholder="000 000 000"
            formRowContainer="col-span-2"
            icon={<MasterCircles />}
            inputclass="profile-modal-inputs"
          />
          <FormRow
            label="CVV"
            name="expiry"
            inputclass="profile-modal-inputs"
          />
        </div>
      </div>

      <div className="px-9 pt-8 pb-12 grid grid-cols-2 border-4 gap-x-4">
        <Btn text="Confirm" size="full" />
        <Btn text="Cancel" type="secondary" size="full" />
      </div>
    </>
  );
};

export default CardForm;
