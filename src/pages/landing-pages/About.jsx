import Footer from "../../components/shared/Footer";
import Hero from "../../components/landings/Hero";
import PageBriefing from "../../components/landings/PageBriefing";
import Section from "../../shared-pages/Section";
import Services from "../../components/landings/Services";
import StandOut from "../../components/landings/StandOut";
import Meet from "../../components/landings/Meet";

const About = () => {
  return (
    <Section blurHeader={true}>
      <Hero type="about" />
      <PageBriefing type="about" />
      <StandOut />
      <Services type="about" />
      <Meet />
      <Footer />
    </Section>
  );
};

export default About;
