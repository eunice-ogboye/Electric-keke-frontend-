import FormRow from "../shared/FormRow";
import dispatchables from "../../utils/dispatchables";
import Btn from "../shared/btn/Btn";

const PaymentForm = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <form className="payment-form">
      <div className="flex flex-col gap-y-10 mb-10">
        <div className="pay-form-rows">
          <FormRow
            label="Card Information"
            labelClass="font-semibold text-base"
          >
            <input type="text" name="card" className="payment-input" />

            <div className="flex items-center">
              <input
                type="text"
                name="expire"
                className="payment-input !mt-0"
              />
              <input type="text" name="cvv" className="payment-input !mt-0" />
            </div>
          </FormRow>

          <FormRow
            label="Card holder name"
            placeholder="Susan Michael"
            inputclass="payment-input"
            labelClass="font-semibold text-base"
          />
          <FormRow
            label="Country or Region"
            placeholder="Nigeria"
            inputclass="payment-input"
            labelClass="font-semibold text-base"
          />
        </div>

        <div className="border border-basic-prime rounded-[6px] pl-5 pr-16 py-3">
          <FormRow
            type="checkbox"
            label="Securely save my information for 1 - click checkout "
            formRowContainer="flex border gap-5 items-start"
          />
        </div>
      </div>

      <Btn
        text="Pay Now"
        styling="w-full btn--hero btn--primary"
        // handleClick={() => openModalWithContent("Pay for ride")}
      />
    </form>
  );
};

export default PaymentForm;
