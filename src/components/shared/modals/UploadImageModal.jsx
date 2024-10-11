import { Upload } from "lucide-react";
import CustomModal from "../CustomModal";
import Btn from "../btn/Btn";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";
import { useState } from "react";
import { useGlobalOnboardContext } from "@/contexts/OnboardingContext";

const UploadImageModal = ({ nextProcess }) => {
  const { isUploadModalOpen, closeUploadModal, openUploadModal } =
    useGlobalOnboardContext();
  const { showAlert } = dispatchables();

  const handleUpload = ({}) => {
    const process = getItemFromLs("onboarding-process");

    if (process === 2) {
      showAlert("selfie");
    } else if (process === 3) {
      showAlert("front license");
    } else {
      showAlert("back license");
    }
    closeUploadModal();
    nextProcess();
  };

  return (
    <CustomModal
      modalStyling="modal__upload"
      // customCloseFunc={closeUploadModal}
      isModalOpen={isUploadModalOpen}
      openModal={openUploadModal}
      closeModal={closeUploadModal}
    >
      <div className="modal__upload-container">
        <div className="modal__upload-dropzone">
          <div className="modal__upload-dropmain">
            <h3 className="modal__upload__title">
              Drag and drop Images to upload
            </h3>

            <div className="upload__icon">
              <Upload />
            </div>

            <Btn
              text="Select files"
              styling="btn w-[79%] btn--outline text-sm md:text-base font-semibold"
            />
          </div>
        </div>

        <p className="upload__text">JPG, PNG file format accepted</p>

        <Btn
          text="Upload"
          styling="btn btn--primary btn--lg mx-auto w-full max-w-[353px] mt-8"
          onClick={handleUpload}
        />
      </div>
    </CustomModal>
  );
};

export default UploadImageModal;
