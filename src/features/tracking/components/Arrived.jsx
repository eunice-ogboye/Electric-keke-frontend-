import Heading from "@/components/Heading";

const Arrived = () => {
  return (
    <div className="mt-8">
      <Heading
        title="You've Arrived"
        tclass="font-josefin"
        description="You've reached the drop off location"
        dclass="text-sm mt-3"
      />

      <div className="mt-6 mb-8 min-h-[262px] flex gap-x-[10px]">
        <div className="flex flex-col justify-between py-7">
          <div className="size-[14px] rounded-full bg-white border-[3px] border-basic" />
          <div className="size-[14px] rounded-full bg-white border-[3px] border-basic" />
        </div>

        <div className="flex flex-col justify-between w-[100%]">
          <div className="flex items-center">
            <p className="w-[15%]">Pick Up</p>
            <div className="ride__location w-[85%]">
              <p className="text-eiteen">Pickup</p>
            </div>
          </div>

          <div className="flex items-center">
            <p className="w-[15%]">Drop Off</p>
            <div className="ride__location w-[85%]">
              <p className="text-eiteen">Drop Off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrived;
