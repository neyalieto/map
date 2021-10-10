import React from 'react';
import { Marker as MarkerBase } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 30],
});

const Marker = ({ position, children }) => (
    <MarkerBase position={position} icon={MarkerIcon}>
        {children}
    </MarkerBase>
);

export  default  Marker;
