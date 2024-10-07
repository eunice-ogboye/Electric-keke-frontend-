import Heading from "../../../components/shared/Heading";
import { useState } from "react";
import AuthProcess from "./AuthProcess";
import UploadImageModal from "@/components/shared/modals/UploadImageModal";
import { useGlobalOnboardContext } from "@/contexts/OnboardingContext";

const RiderShared = ({ children, nextProcess }) => {
  const { isUploadModalOpen, closeUploadModal } = useGlobalOnboardContext();

  return (
    <>
      {isUploadModalOpen && (
        <UploadImageModal
          nextProcess={nextProcess}
          closeUploadModal={closeUploadModal}
        />
      )}

      <section className="home-pad py-10 md:py-6 laptop:py-[60px] w-full">
        <div>
          <div className="w-full md:w-[60%] max-w-[888px] mx-auto">
            <Heading
              title="Driver's license & Document"
              tclass="text-2xl font-bold md:text-[2rem] laptop:text-[40px] text-center font-josefin"
            />
            <AuthProcess />
          </div>
          {children}
        </div>
      </section>
    </>
  );
};

export default RiderShared;
