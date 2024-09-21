import PayPass from "../../assets/svg/PayPass";

const MasterCard = ({ name, expiry, number, cvv }) => {
  const card_number = number.split("");
  return (
    <div className="master-card">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-white">Untitled</p>
        <PayPass />
      </div>

      <div className="flex items-end justify-between">
        <div className="w-[193px] ">
          <div className="user-name-expiry">
            <p>{name}</p>
            <p>{expiry}</p>
          </div>

          <div className="card-number">
            <p className="text-base">
              <span>{card_number.slice(0, 4)}</span>{" "}
              <span>{card_number.slice(4, 8)}</span>{" "}
              <span>{card_number.splice(8, 12)}</span>{" "}
              <span>{card_number.splice(12, 16)}</span>
            </p>
          </div>
        </div>

        <div className="w-[45px] h-8 bg-white/10 relative">
          <div className="rounded-full w-4 aspect-square bg-white/50 absolute top-1/2 -translate-y-1/2 left-2" />
          <div className="rounded-full w-4 aspect-square bg-white/50 absolute top-1/2 -translate-y-1/2 right-2" />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
