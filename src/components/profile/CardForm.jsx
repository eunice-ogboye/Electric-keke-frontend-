import FormRow from "../shared/FormRow";
import MasterCircles from "../../assets/svg/MasterCircles";

const CardForm = ({ formData }) => {
  return (
    <div className="option-card-form-content mt-3 md:mt-6">
      <div className="card-content-group">
        <FormRow
          label="Name on card"
          labelClass="text-xs"
          name="name"
          value={formData.name}
          placeholder="susan michael"
          formRowContainer="col-span-2"
          inputclass="profile-modal-inputs"
        />
        <FormRow
          label="Expiry"
          labelClass="text-xs"
          name="expiry"
          value={formData.expiry}
          inputclass="profile-modal-inputs"
        />
      </div>
      <div className="card-content-group">
        <FormRow
          label="Card number"
          labelClass="text-xs"
          name="number"
          value={formData.number}
          placeholder="000 000 000"
          formRowContainer="col-span-2"
          icon={<MasterCircles />}
          inputclass="profile-modal-inputs"
        />
        <FormRow
          label="CVV"
          labelClass="text-xs"
          name="expiry"
          inputclass="profile-modal-inputs"
        />
      </div>
    </div>
  );
};

export default CardForm;
