// // import { toggleModal } from "../store/slices/global-slice";

// const closeModalOnBodyClick = (e, flipModal) => {
//   console.log(e.target.scrollHeight);
//   const immediateChild = e.currentTarget.children[0];
//   const width = immediateChild.clientWidth;
//   const height = immediateChild.clientHeight;
//   const windowScrollY = window.scrollY;
//   const startX = immediateChild.offsetLeft;
//   const startY = immediateChild.offsetTop + windowScrollY;
//   console.log(startX, startY);
//   const endX = startX + width;
//   const endY = startY + height + windowScrollY;

//   // console.log(endX, endY);
//   const clickedPositionX = e.pageX;
//   const clickedPositionY = e.pageY;

//   if (
//     clickedPositionX > startX &&
//     clickedPositionX < endX &&
//     clickedPositionY > startY &&
//     clickedPositionY < endY
//   ) {
//     // console.log("yes click is within the modalref");
//     return;
//   }
//   flipModal(false);
// };

// export default closeModalOnBodyClick;

const closeModalOnBodyClick = (e, flipModal) => {
  const immediateChild = e.currentTarget.children[0];
  const {
    clientWidth: width,
    clientHeight: height,
    offsetLeft: startX,
    offsetTop,
  } = immediateChild;
  const windowScrollY = window.scrollY;
  const startY = offsetTop + windowScrollY;
  const endX = startX + width;
  const endY = startY + height;

  const { pageX: clickedPositionX, pageY: clickedPositionY } = e;

  if (
    clickedPositionX > startX &&
    clickedPositionX < endX &&
    clickedPositionY > startY &&
    clickedPositionY < endY
  ) {
    return;
  }
  flipModal(false);
};

export default closeModalOnBodyClick;
