import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";

const LocationMarker = ({ position }) => {
  const [fly, setFly] = useState(true);
  const map = useMapEvents({
    click() {
      map.setView(position, map.getZoom());
      // map.setView(position, map.getZoom())
    },
  });

  return position === null ? null : (
    <Marker
      position={position}
      eventHandlers={{
        click: () => console.log("marker clicked"),
        
      }}
    >
      <Popup
        eventHandlers={{
          click() {
            console.log("pop up clicked");
          },
        }}
      >
        <div>This is it</div>
      </Popup>
    </Marker>
  );
};

const Map = ({ className }) => {
  const [coordinates, setCoordinates] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates([position.coords.latitude, position.coords.longitude]);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className={className}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={coordinates} />
    </MapContainer>
  );
};

export default Map;
