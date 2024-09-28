import { addItemToLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegisterAsLink = ({ link }) => {
  const { title, icon, role } = link;
  const { registerAs } = useSelector((state) => state.global);
  const { chooseRole } = dispatchables();
  return (
    <Link to="/onboarding/registration" key={title}>
      <div
        className={`registerAs-opt ${role === registerAs && "chosen-role"}`}
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
