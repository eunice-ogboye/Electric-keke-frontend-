import Chat from "../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";
import ContactModal from "../shared/modals/ContactModal";
import Btn from "../shared/btn/Btn";

const Person = ({ role, fullname }) => {
  const navigate = useNavigate();


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

        <div className="flex items-center">
          <Btn
            icon={<Chat />}
            className="bg-transparent"
            onClick={() => navigate("/chat")}
          />
          <ContactModal />
        </div>
      </div>
    </div>
  );
};

export default Person;
