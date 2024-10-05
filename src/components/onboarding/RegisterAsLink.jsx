import { addItemToLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegisterAsLink = ({ title, icon, role }) => {
  const { registerAs } = useSelector((state) => state.global);
  const { chooseRole } = dispatchables();
  return (
    <Link to="/onboarding/registration" key={title}>
      <div
        className={`register__options ${role === registerAs && "chosen-option"}`}
        onMouseOver={() => {
          chooseRole(role);
          addItemToLs("onboarding-process", 0);
        }}
      >
        <div className="flex items-center gap-5">
          <div>
            <img src={icon} alt={title} />
          </div>
          <p>{title}</p>
        </div>

        <div>
          <img src="/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default RegisterAsLink;
