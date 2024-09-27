import MobileHeader from "../components/shared/MobileHeader";
import Header from "../components/shared/Header";

const Section = ({ children, darkLogo, blurHeader }) => {
  return (
    <>
      <MobileHeader />
      <Header darkLogo={darkLogo} blur={blurHeader} />
      <section>{children}</section>
    </>
  );
};

export default Section;
