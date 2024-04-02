import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { setPositions } from "../..";
import { env } from "process";

interface ShowInMapProps {
  positionDetails: setPositions;
}

export default function ShowInMap({ positionDetails }: ShowInMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBP5L-Cy4m2CpIgXksVx5uvDpUkZrcdaPI",
  });

  const position = {
    lat: positionDetails?.latitude,
    lng: positionDetails?.longitude,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "488px", height: "142px" }}
      center={position}
      zoom={15}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}
