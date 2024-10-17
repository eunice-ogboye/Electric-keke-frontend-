export const ModalTrigger = ({ ...props }) => {
  return <div {...props} />;
};

export const Modal = ({ styling, ...props }) => {
  return (
    <section
      className={styling}
      {...props}
    />
  );
};

export const ModalSheet = ({ styling, ...props }) => {
  return (
    <div className={styling} onClick={(e) => e.stopPropagation()} {...props} />
  );
};
