import React from "react";

import { useFetchRoutes } from './hooks/useFetchRoutes';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './App.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function App() {
  const data = useFetchRoutes();

  console.log('data', data);

  if(!data) return null;

  return (

    <MapContainer center={[41.390205, 2.154007]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map(item => (
        <Marker position={item.coordinates} key={item.id}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );

  
}

export default App;
