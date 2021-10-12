import React from 'react';
import { Popup } from 'react-leaflet';

import Map from './components/Map';
import Marker from './components/Marker';
import useRouteData from "./hooks/useRouteData";
import Polyline from './components/Polyline';
import Tooltip from './components/Tooltip';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const data = useRouteData();

  if (!data) return null;

  const primary = data.primary.map(item => item.coordinates);
  const secondary = data.secondary.map(item => item.coordinates);

  return (
    <Map bounds={primary}>
      {data.primary.map(item => (
        <Marker position={item.coordinates} key={item.id} slug = {item.slug}>
          <Tooltip country = {item.name} >     
          </Tooltip>
        </Marker>
      ))}

      <Polyline positions={primary} />
      <Polyline positions={secondary} variant="secondary" />
    </Map>
  );
}

export default App;
