// import { motion } from "framer-motion";
// import { modalParent } from "@/constants/variants";
import Heading from "@/components/Heading";
import Map from "@/components/Map";
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
          tclass="title__default title--book"
          description={type === "booking" ? map_booking.desc : map_request.desc}
          dclass="desc__default desc--book"
        />
      </div>

      {children}
    </>
  );
};

export default SharedModalMap;
