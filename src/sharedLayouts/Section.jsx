import MobileHeader from "../components/shared/MobileHeader";
import Header from "../components/shared/Header";

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
