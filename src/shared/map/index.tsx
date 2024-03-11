// import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  // const markerIcon = new Icon({
  //   iconUrl: "/images/marker.png",
  //   iconSize: [23, 33],
  // });

  return (
    <>
      <iframe src="https://www.google.com/maps/d/embed?mid=1nypOeOH5banj3IKb2PmZEv5RXz2aCMQ&ehbc=2E312F" className="w-full h-[600px]"></iframe>
    </>
    // <MapContainer
    //   attributionControl={false}
    //   center={[37.900934, 58.404260]}
    //   zoom={13}
    //   style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    // >
    //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //   {/* <Marker icon={markerIcon} position={[37.969908, 58.320069]}></Marker> */}
    // </MapContainer>
  );
};