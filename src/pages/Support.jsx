import { useTitle } from "../lib/hooks";
import { Section } from "../shared-layout";
import { ContactSupport, Faq, Footer } from "../components";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

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
