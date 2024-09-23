const DriverAuthBoard = ({ titleAndText, driverAuthProcessStage }) => {
  return (
    <>
      {driverAuthProcessStage === "Processing" ? null : (
        <div
          className={`border ${
            driverAuthProcessStage === "identity"
              ? "w-full md:w-[392px] h-[450px]"
              : "w-full md:w-[635px] h-[394px]"
          } mx-auto overflow-hidden`}
        >
          <div className="size-full">
            <img src={titleAndText.img} alt="selfie" className="size-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default DriverAuthBoard;
