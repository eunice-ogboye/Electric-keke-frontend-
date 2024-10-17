import Hero from "@/features/landing/components/Hero";
import useTitle from "@/hooks/useTitle";
import Section from "@/layouts/Section";
import PageBriefing from "@/features/landing/components/PageBriefing";
import Services from "@/features/landing/components/Services";
import Connected from "@/features/landing/components/Connected";
import Mission from "@/features/landing/components/home/Mission";
import Testimonial from "@/features/landing/components/Testimonial";
import Footer from "@/components/Footer";

const Home = () => {
  useTitle("Home");

  return (
    <Section blurHeader={true}>
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
