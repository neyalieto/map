import React from "react";

import { useFetchRoutes } from './hooks/useFetchRoutes';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import logo from './logo.svg';
import './App.css';

function App() {
  const data = useFetchRoutes();

  console.log('data', data);

  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
