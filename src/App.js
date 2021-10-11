import React from 'react';
import { Popup, Polyline } from 'react-leaflet';

import Map from './components/Map';
import Marker from './components/Marker';
import { useFetchRoutes } from './hooks/useFetchRoutes';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const data = useFetchRoutes();
  const limeOptions = { color: '#058fff' };

  if (!data) return null;

  const points = data.map(item => item.coordinates);

  return (
    <Map bounds={points}>
      {data.map(item => (
        <Marker position={item.coordinates} key={item.id}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}

      <Polyline pathOptions={limeOptions} positions={points} />
    </Map>
  );
}

export default App;
