import Section from "@/layouts/Section";
import useTitle from "@/hooks/useTitle";
import Hero from "@/features/landing/components/Hero";
import PageBriefing from "@/features/landing/components/PageBriefing";
import Contribution from "@/features/landing/components/Contribution";
import Testimonial from "@/features/landing/components/Testimonial";
import Connected from "@/features/landing/components/Connected";
import Footer from "@/components/Footer";

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
