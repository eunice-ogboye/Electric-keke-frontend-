import { care_socials } from "../../../../constants";
import CareSocial from "./CareSocial";

const ContactSupport = () => {
  return (
    <div className="space-y-[50px] w-full pt-10 tablet:pt-[5.3rem] pb-10 tablet:pb-[6.6rem]">
      <CareSocial icon="/headphone.svg" title="Customer Services" />
      {care_socials.map((item, index) => {
        return <CareSocial key={item.title} {...item} />;
      })}
    </div>
  );
};

export default ContactSupport;
