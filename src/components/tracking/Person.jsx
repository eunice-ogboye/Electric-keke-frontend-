import dispatchables from "../../utils/dispatchables";
import CustomizedBtn from "../shared/CustomizedBtn";
import Call from "../../assets/svg/Call";
import Chat from "../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";

const Person = ({ role, fullname }) => {
  const navigate = useNavigate();
  const { openModalWithContent } = dispatchables();

  function handleClick() {
    openModalWithContent("contact passenger");
  }

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

        <div>
          <CustomizedBtn
            icon={<Chat />}
            className="bg-transparent"
            handleClick={() => navigate("/chat")}
          />
          <CustomizedBtn
            icon={<Call type="rider" />}
            className="bg-transparent"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
