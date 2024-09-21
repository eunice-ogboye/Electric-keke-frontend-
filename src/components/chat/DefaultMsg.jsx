import CustomizedBtn from "../shared/CustomizedBtn";

const DefaultMsg = () => {
  return (
    <div className="flex-center absolute bottom-40 left-1/2 -translate-x-1/2 gap-x-6">
      <CustomizedBtn text="On my way" className="default-msg-btn" />
      <CustomizedBtn text="Can't make it" className="default-msg-btn" />
    </div>
  );
};

export default DefaultMsg;
