import MobileHeader from "../components/shared/MobileHeader";
import Header from "../components/shared/Header";

const Section = ({ children, darkLogo }) => {
  return (
    <>
      <MobileHeader />
      <Header darkLogo={darkLogo} />
      <section>{children}</section>
    </>
  );
};

export default Section;
