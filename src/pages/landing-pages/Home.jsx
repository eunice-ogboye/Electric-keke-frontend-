import { useTitle } from "../../lib/hooks";
import Section from "../../shared-pages/Section";
import Hero from "../../components/landings/Hero";
import PageBriefing from "../../components/landings/PageBriefing";
import Services from "../../components/landings/Services";
import Connected from "../../components/landings/Connected";
import Testimonial from "../../components/landings/Testimonial";
import Mission from "../../components/landings/Mission";
import Footer from "../../components/shared/Footer";

const Home = () => {
  useTitle("Home");

  return (
    <Section>
      <Hero />
      <PageBriefing />
      <Services />
      <Mission />
      <Testimonial />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Home;
