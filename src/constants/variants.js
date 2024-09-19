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

export { modalParent, modalContainer };
