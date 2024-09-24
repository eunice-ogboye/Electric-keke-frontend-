import Logo from "../../components/shared/Logo";
import Heading from "../../components/shared/Heading";
import Assurance from "../../components/auth/Assurance";
import CustomizedBtn from "../../components/shared/CustomizedBtn";

const Congrats = ({ changeAuthenticationPage }) => {
  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="w-[122px] h-[81px] mx-auto" />
          <Heading
            title="Continue to Login"
            tclass="auth-title"
          />
        </div>

        <div className="congrats-board">
          <div className="flex-center">
            <img src="/congrats.svg" alt="tick" />
          </div>
        </div>

        <div className="mt-0 my-dell:mt-14 max-w-[343px] mx-auto">
          <CustomizedBtn
            text="Proceed"
            className="h-14 w-full rounded-full bg-eco-green"
            href="/authentication/login"
            // handleClick={() => {
            //   changeAuthenticationPage("login");
            // }}
          />
          <Assurance />
        </div>
      </div>
    </div>
  );
};

export default Congrats;
