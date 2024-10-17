const modalContainer = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
  leave: {
    y: 200,
    opacity: 0,
    transition: {
      delayChildren: 0.57,
      staggerChildren: 3.75,
      when: "afterChildren",
    },
  },
};

const modalParent = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
  leave: { opacity: 0, scale: 0, transition: { duration: 2, type: "spring" } },
};

const reviewContainer = {
  out: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delayChildren: 0.2,
      staggerChildren: 0.65,
    },
  },
};
const reviewContainerChildren = {
  out: { opacity: 0, y: 200 },
  enter: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: custom * 0.35,
    },
  }),
};

const riderParentVariant = {
  out: {
    x: 200,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 2,
      stagerChildren: 3,
    },
  },
  leave: { x: -200, opacity: 0 },
};

const riderPictureContainer = {
  out: { scale: 0, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.2,
    },
  },
};

export {
  modalParent,
  modalContainer,
  reviewContainer,
  reviewContainerChildren,
  riderParentVariant,
  riderPictureContainer
};
