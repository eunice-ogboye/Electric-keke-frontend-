import MobileHeader from "../components/shared/MobileHeader";
import Header from "../components/shared/Header";

const Section = ({ children, darkLogo, blurHeader }) => {
  return (
    <>
      <MobileHeader blur={blurHeader} />
      <Header darkLogo={darkLogo} blur={blurHeader} />
      <section>{children}</section>
    </>
  );
};

export default Section;
