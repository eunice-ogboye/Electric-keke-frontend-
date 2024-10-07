import { motion } from "framer-motion";
import { modalParent } from "@/constants/variants";
import Map from "../Map";
import Heading from "../Heading";
import { map_booking, map_request } from "@/constants";

const SharedModalMap = ({ children, type }) => {
  return (
    <>
      <div>
        <div className="map">
          <Map className="w-full h-full rounded-[27px]" />
        </div>

        <Heading
          className="modal-map__heading"
          title={type === "booking" ? map_booking.title : map_request.title}
          tclass="modal-map__title md:!text-[28px] laptop:!text-[2rem]"
          description={type === "booking" ? map_booking.desc : map_request.desc}
          dclass="modal-map__desc"
        />
      </div>

      {children}
    </>
  );
};

export default SharedModalMap;
