import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ children, ...props }) => (
  <MapContainer {...props}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
    />
    {children}
  </MapContainer>
);

export default Map;
