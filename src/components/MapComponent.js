import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapComponent = ({ onPointsChange }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    if (markers.length < 2) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      const updatedMarkers = [...markers, newMarker];
      setMarkers(updatedMarkers);
      onPointsChange(updatedMarkers);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      onClick={handleMapClick}
      center={{ lat: 20.5937, lng: 78.9629 }} // Default center (India)
      zoom={5}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
