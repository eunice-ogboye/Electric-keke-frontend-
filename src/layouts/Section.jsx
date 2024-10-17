import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";

const Section = ({
  children,
  darkLogo,
  blurHeader,
  withDesktopHeader = true,
}) => {
  return (
    <>
      <MobileHeader blur={blurHeader} />
      {withDesktopHeader && <Header darkLogo={darkLogo} blur={blurHeader} />}
      <section>{children}</section>
    </>
  );
};

export default Section;
