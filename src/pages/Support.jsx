import useTitle from "@/hooks/useTitle";
import Section from "@/layouts/Section";
import { useSelector } from "react-redux";
import Faq from "@/features/landing/components/support/Faq";
import ContactSupport from "@/features/landing/components/support/ContactSupport";
import Footer from "@/components/Footer";
import Hero from "@/features/landing/components/Hero";

const Support = () => {
  useTitle("Support");
  // redux globals
  const { support } = useSelector((state) => state.global);

  return (
    <Section blurHeader={true}>
      <Hero type="support" />

      <div className="support-intersect">
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>

      <Footer />
    </Section>
  );
};

export default Support;
