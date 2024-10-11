import Btn from "../shared/btn/Btn";
const DefaultMsg = () => {
  return (
    <div className="flex-center absolute  bottom-24 md:bottom-40 left-1/2 -translate-x-1/2 gap-x-6">
      <Btn text="On my way" styling="default-msg-btn" />
      <Btn text="Can't make it" styling="default-msg-btn" />
    </div>
  );
};

export default DefaultMsg;
