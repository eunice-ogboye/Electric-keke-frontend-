// import { toggleModal } from "../store/slices/global-slice";

const closeModalOnBodyClick = (e, flipModal) => {
  const child = e.currentTarget.children[0];
  const childW = child.clientWidth;
  const childH = child.clientHeight;
  const windowScrollY = window.scrollY;
  const startX = child.offsetLeft;
  const startY = child.offsetTop + windowScrollY;
  console.log(startX, startY);
  const endX = startX + childW;
  const endY = startY + childH + windowScrollY;

  console.log(endX, endY);
  const clickedPositionX = e.pageX;
  const clickedPositionY = e.pageY;


  if (
    clickedPositionX > startX &&
    clickedPositionX < endX &&
    clickedPositionY > startY &&
    clickedPositionY < endY
  ) {
    console.log("yes click is within the modalref");
    return;
  }
  flipModal(false)
};

export default closeModalOnBodyClick;
