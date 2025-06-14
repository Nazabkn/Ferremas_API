import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -33.4489, // Santiago de Chile
  lng: -70.6693,
};

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDLa-pvWkUCW-j4WWyLhn5eb78xbLgwyAw' // ⬅️ Reemplaza con tu clave
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ubicación de Ferremas 🛠️</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Mapa;
