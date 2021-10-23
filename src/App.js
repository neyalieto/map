import React from 'react';

import Map from './components/Map';
import Marker from './components/Marker';
import useRouteData from "./hooks/useRouteData";
import Polyline from './components/Polyline';
import Tooltip from './components/Tooltip';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const data = useRouteData();

  return (
    <Map bounds={data.bounds}>
      {data.primary.map(item => (
        <Marker position={item.coordinates} slug={item.slug} key={item.id}>
          <Tooltip>{item.name}</Tooltip>
        </Marker>
      ))}

      <Polyline positions={data.primary.map(item => item.coordinates)} />
      {data.secondary.map((positions, index) => (
        <Polyline positions={positions} variant="secondary" key={index} />
      ))}
    </Map>
  );
}

export default App;
