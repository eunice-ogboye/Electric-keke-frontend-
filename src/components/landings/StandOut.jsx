import Heading from "../shared/Heading";

const StandOut = () => {
  return (
    <section className="home-pad flex-center h-[495px]">
      <div className="text-center">
        <Heading
          title="Why We Stand Out!"
          tclass="max-w-[623px] mx-auto text-center service-heading font-josefin"
          description="Our mission is simple, to revolutionize urban transportation by providing electric, zero-emission rides and deliveries that are accessible to everyone. We envision a future where eco-friendly transport is the standard, not the exception. By expanding our services and fleet, we hope to play a pivotal role in promoting greener cities and healthier communities for generations to come."
          dclass="mt-3 md:mt-7 text-center text-2xl"
          type="about"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          initialp={{ opacity: 0, x: -200 }}
          animatep={{ opacity: 1, x: 0 }}
        />
      </div>
    </section>
  );
};

export default StandOut;
