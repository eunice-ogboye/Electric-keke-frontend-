import Congrats from "../../assets/svg/Congrats";
import CustomizedBtn from "../shared/CustomizedBtn";
import Heading from "../shared/Heading";

const SaveModal = () => {
  return (
    <div className="w-full max-w-[600px] bg-white rounded-[16px] text-center">
      <div className="pt-12 px-9 pb-8">
        <div className="mx-auto size-20">
          <Congrats />
        </div>
        <Heading
          title="Welldone!"
          description="You have succesfully updated your profile"
        />
      </div>
      
      <div className="h-[136px] flex-center pt-8 px-9 pb-12">
        <CustomizedBtn
          text="Go Back"
          className="h-14 w-full bg-eco-green rounded-full"
        />
      </div>
    </div>
  );
};

export default SaveModal;
