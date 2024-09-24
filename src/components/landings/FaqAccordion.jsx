import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm md:text-2xl">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-eiteen">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm md:text-2xl">Is it styled?</AccordionTrigger>
        <AccordionContent className="text-eiteen">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm md:text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-eiteen">
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-sm md:text-2xl">
          How do i manage my notifications?
        </AccordionTrigger>
        <AccordionContent className="text-eiteen">
          To manage notifications, go to "Settings," select "Notification
          Settings," and customize your preferences.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
