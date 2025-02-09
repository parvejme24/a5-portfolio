"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "20px",
};

const center = {
  lat: 22.6851, // Replace with your actual latitude
  lng: 90.6487, // Replace with your actual longitude
};

export default function GoogleMapComponent() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
        My Location on Google Map
      </h1>
      <div className="mt-6 w-full h-[250px] rounded-3xl overflow-hidden">
        <LoadScript
          googleMapsApiKey={process.env.LIFE_CARE_GOOGLE_MAPS_API_KEY as string}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
