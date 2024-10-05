export const ModalTrigger = ({ ...props }) => {
  return <div {...props} />;
};

export const Modal = ({ styling, ...props }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen overflow-y-scroll ${styling}`}
      {...props}
    />
  );
};

export const ModalSheet = ({ styling, ...props }) => {
  return (
    <div className={styling} onClick={(e) => e.stopPropagation()} {...props} />
  );
};
