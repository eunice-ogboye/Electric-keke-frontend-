import useTitle from "../../hooks/useTitle";
import Section from "../../sharedLayouts/Section";
import SearchBar from "../../components/shared/SearchBar";
import { useSelector } from "react-redux";
import Hero from "../../components/landings/Hero";
import Faq from "../../components/landings/Faq";
import ContactSupport from "../../components/landings/ContactSupport";
import Footer from "../../components/shared/Footer";

const Support = () => {
  useTitle("Support");
  // redux globals
  const { support } = useSelector((state) => state.global);

  return (
    <Section blurHeader={true}>
      <Hero type="support" />
      <div className="support-intersect">
        <SearchBar className="support-search-bar" />
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>
      <Footer />
    </Section>
  );
};

export default Support;
