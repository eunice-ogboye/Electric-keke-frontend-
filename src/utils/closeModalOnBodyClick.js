// import { toggleModal } from "../store/slices/global-slice";

const closeModalOnBodyClick = (e, flipModal) => {
  console.log(e.target.children[0])
  const modal = e.target.children[0]
  const pageY = window.scrollY;
  const xStart = modal.offsetLeft;
  const xEnd = modal.offsetLeft + modal.clientWidth;
  const yStart = modal.offsetTop + pageY;
  const yEnd = modal.offsetTop + modal.clientHeight + pageY;
  const clickPositionX = e.pageX;
  const clickPositionY = e.pageY;
  if (
    clickPositionX > xStart &&
    clickPositionX < xEnd &&
    clickPositionY > yStart &&
    clickPositionY < yEnd
  ) {
    console.log("yes click is within the modalref");
    return;
  }
  // dispatch(toggleModal(false));
  flipModal(false)
};

export default closeModalOnBodyClick;
