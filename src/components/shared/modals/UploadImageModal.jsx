import { Upload } from "lucide-react";
import NewModal from "../CustomModal";
import Btn from "../btn/Btn";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";

const UploadImageModal = ({ nextProcess, closeUploadModal }) => {
  const { showAlert } = dispatchables();
  const handleUpload = () => {
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
    <NewModal
      definedState={true}
      modalStylling="modal__upload"
      // customCloseFunc={customClose}
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
              styling="btn w-[79%] md:w-full md:h-14 btn--clear btn--border text-sm md:text-base font-semibold"
              // onClick={() => nextProcess()}
            />
          </div>

          <p className="upload__text">JPG, PNG file format accepted</p>

          <Btn
            text="Upload"
            styling="btn btn--primary btn--lg mx-auto w-full max-w-[353px] mt-8"
            onClick={handleUpload}
          />
        </div>
      </div>
    </NewModal>
  );
};

export default UploadImageModal;
