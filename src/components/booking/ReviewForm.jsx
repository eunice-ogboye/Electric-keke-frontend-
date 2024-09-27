import { deletItemFromLs } from "../../lib/ls";
import dispatchables from "../../utils/dispatchables";
import CustomizedBtn from "../shared/CustomizedBtn";

const ReviewForm = ({ rateValue }) => {
  const { flipModal, showAlert } = dispatchables();

  const handleClick = () => {
    showAlert(`${rateValue} ride complete`);
    flipModal(false);
    deletItemFromLs("book-data");
    deletItemFromLs("rider");
    deletItemFromLs("current-ride");
  };

  return (
    <form className="w-full px-5">
      <label className="w-full">
        <span className="block text-base font-semibold">Comment</span>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          className="px-3 py-2 w-full resize-none"
        />
      </label>
      <CustomizedBtn
        href="/"
        text="Send"
        className="w-full h-14 primary-btn"
        handleClick={handleClick}
      />
    </form>
  );
};

export default ReviewForm;
