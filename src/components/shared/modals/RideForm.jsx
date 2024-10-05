import { motion } from "framer-motion";
import SharedModalMap from "./SharedModalMap";
import ModalForm from "@/components/booking/ModalForm";
import BookingModalForm from "./BookingModalForm";

const RideForm = () => {
  return (
    <SharedModalMap type="booking">
      <BookingModalForm />
    </SharedModalMap>
  );
};

export default RideForm;
