import { deletItemFromLs } from "../../../utils/ls";
import dispatchables from "../../../utils/dispatchables";
import Btn from "../shared/btn/Btn";
import { useRef } from "react";

const ReviewForm = ({ rateValue, setRateDriver }) => {
  const commentRef = useRef();
  const { showAlert } = dispatchables();

  const handleSubmit = (e) => {
    e.preventDefault();
    showAlert(`${rateValue} ${commentRef.current.value} ride complete`);
    deletItemFromLs("book-data");
    deletItemFromLs("rider");
    deletItemFromLs("current-ride");
    setRateDriver(false);
  };

  return (
    <form className="w-full px-5" onSubmit={handleSubmit}>
      <label className="w-full">
        <span className="block text-base font-semibold">Comment</span>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          className="px-3 py-2 w-full resize-none"
          ref={commentRef}
        />
      </label>

      <Btn
        href="/"
        text="Send"
        styling="btn btn--primary btn--lg w-full"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ReviewForm;
