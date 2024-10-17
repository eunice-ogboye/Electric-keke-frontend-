import Footer from "@/components/Footer";
import Section from "@/layouts/Section";
import Hero from "@/features/landing/components/Hero";
import PageBriefing from "@/features/landing/components/PageBriefing";
import Services from "@/features/landing/components/Services";
import Meet from "@/features/landing/components/about/Meet";
import StandOut from "@/features/landing/components/about/StandOut";

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
