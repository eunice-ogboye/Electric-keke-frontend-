import { Upload } from "lucide-react";
import React from "react";
import CustomizedBtn from "../shared/CustomizedBtn";
import { useSelector } from "react-redux";
import dispatchables from "@/utils/dispatchables";
import { getItemFromLs } from "@/utils/ls";

const DriverAuthModal = () => {
  const { flipModal, showAlert } = dispatchables();
  const { nextDriverAuth } = useSelector((state) => state.global);

  return (
    <div className="w-full rounded-[24px] bg-white px-[30px] py-14 md:py-7">
      <div className="md:w-[93%] laptop:w-[78%] mx-auto">
        <div className="border border-eco-neutral-thick2 border-dashed px-[13px] py-6 md:px-24 rounded-[12px]">
          <div className="border-8 min-h-[228px] md:min-h-[325px] flex flex-col items-center justify-between">
            <h3 className="text-eiteen md:text-2xl font-bold font-josefin text-center">
              Drag and drop Images to upload
            </h3>

            <div className="size-[78px] md:size-[7.5rem] rounded-full bg-[#E8F4E8] flex-center">
              <Upload />
            </div>

            <CustomizedBtn
              text="Select files"
              className="btn w-[79%] md:w-full md:h-14 btn--clear !text-black btn--border text-sm md:text-base font-semibold"
            />
          </div>
        </div>

        <p className="text-xs md:text-sm font-medium text-center mt-6">
          JPG, PNG file format accepted
        </p>

        <CustomizedBtn
          text="Upload"
          className="w-full max-w-[353px] block mx-auto btn btn--primary h-14 mt-[31px]"
          handleClick={() => {
            const process = getItemFromLs("onboarding-process");

            if (process === 2) {
              showAlert("selfie");
            } else if (process === 3) {
              showAlert("front license");
            } else {
              showAlert("back license");
            }
            flipModal();
            nextDriverAuth();
          }}
        />
      </div>
    </div>
  );
};

export default DriverAuthModal;
