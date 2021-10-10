import React from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet';

import Marker from './components/Marker';
import { useFetchRoutes } from './hooks/useFetchRoutes';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const data = useFetchRoutes();
  const limeOptions = { color: 'lime' };

  if (!data) return null;

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

      <Polyline pathOptions={limeOptions} positions={data.map(item => item.coordinates)} />
    </MapContainer>
  );
}

export default App;
