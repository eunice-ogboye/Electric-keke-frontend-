import Section from "../../sharedLayouts/Section";
import useTitle from "../../hooks/useTitle";
import Hero from "../../components/landings/Hero";
import PageBriefing from "../../components/landings/PageBriefing";
import Testimonial from "../../components/landings/Testimonial";
import Connected from "../../components/landings/Connected";
import Contribution from "../../components/landings/Contribution";
import Footer from "../../components/shared/Footer";

const Earn = () => {
  useTitle("Earn");

  return (
    <Section blurHeader={true}>
      <Hero type="earn" />
      <PageBriefing type="earn" />
      <Contribution />
      <Testimonial type="earn" />
      <Connected type="earn" />
      <Footer />
    </Section>
  );
};

export default Earn;
