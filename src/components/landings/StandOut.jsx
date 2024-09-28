import { stand_out_text } from "../../constants";
import Heading from "../shared/Heading";

const StandOut = () => {
  return (
    <section className="home-pad flex-center min-h-[495px] py-10 " style={{
      backgroundImage: "url('/hero/trees.png')"
    }}>
      <div className="text-center">
        <Heading
          title="Why We Stand Out!"
          tclass="max-w-[623px] mx-auto text-center service-heading font-josefin text-white"
          description={stand_out_text}
          dclass="mt-3 md:mt-7 text-center text-2xl text-white"
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
