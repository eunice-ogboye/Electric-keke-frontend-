import { useTitle } from "../../lib/hooks";
import Section from "../../shared-pages/Section";
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
    <Section>
      <Hero type="support" />
      <div className="home-pad min-h-[617px] bg-base-white flex items-center flex-col justify-center relative">
        <SearchBar className="w-full max-w-[865px] border-2 border-white bg-white rounded-[40px] p-1 flex items-center justify-between mx-auto absolute -top-8 h-16" />
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>
      <Footer />
    </Section>
  );
};

export default Support;
