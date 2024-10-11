import Chat from "../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";
import ContactModal from "../shared/modals/ContactModal";
import Btn from "../shared/btn/Btn";
import { useModal } from "@/hooks/useModal";
import { useMedia } from "@/hooks/useMedia";

const Person = ({ role, fullname, hasArrived }) => {
  const navigate = useNavigate();

  const mediaSmall = useMedia("(max-width:500px)");

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="person-details">
      <div className="person-photo-container">
        <img
          src="/persons/rider1.png"
          alt="person name"
          className="person-photo"
        />
      </div>

      <div className="person-credentials">
        <div>
          <p className="person-name">{fullname}</p>
          {role === "User" && <p className="rider-status">On his way...</p>}
        </div>

        {!hasArrived && (
          <div className="flex-center gap-x-9">
            <Btn
              icon={
                <Chat
                  width={mediaSmall ? 41 : 50}
                  height={mediaSmall ? 33 : 41}
                />
              }
              className="bg-transparent p-0"
              onClick={() => navigate("/chat")}
            />
            <ContactModal
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
              smallMedia={mediaSmall}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Person;
