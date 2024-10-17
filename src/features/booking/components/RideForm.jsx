import { motion } from "framer-motion";
import ModalForm from "@/features/booking/components/ModalForm";
import BookingModalForm from "./BookingModalForm";
import SharedModalMap from "../layouts/SharedModalMap";

const RideForm = () => {
  return (
    <SharedModalMap type="booking">
      <BookingModalForm />
    </SharedModalMap>
  );
};

export default RideForm;
