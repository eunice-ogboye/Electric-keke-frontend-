import React from "react";

const ModalTemplate = ({ top, bottom }) => {
  return (
    <div
      className="rounded-[16px] w-full max-w-[600px] bg-white pt-12 px-3 md:px-9 mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {top}
      <div className="pt-8 px-9 pb-12 flex-center gap-x-10">{bottom}</div>
    </div>
  );
};

export default ModalTemplate;
