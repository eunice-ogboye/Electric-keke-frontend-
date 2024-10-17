import Btn from "@/components/btn/Btn";

const RiderSummary = ({ openModal }) => {
  return (
    <>
      <div className="flex items-center gap-x-5">
        <p className="font-semibold text-base">Total cost of ride</p>
        <div className="ride-fare !font-normal">N3000</div>
      </div>

      <Btn
        text="Confirm Payment"
        styling="btn btn--lg btn--primary mt-10"
        onClick={openModal}
      />
    </>
  );
};

export default RiderSummary;
