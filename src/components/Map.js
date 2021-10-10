import React from 'react';
import { MapContainer } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

import { API_KEY } from '../config/googleMaps';

const Map = ({ children, ...props }) => (
  <MapContainer {...props}>
    <ReactLeafletGoogleLayer apiKey={API_KEY} />
    {children}
  </MapContainer>
);

export default Map;
