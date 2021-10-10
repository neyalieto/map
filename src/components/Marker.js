import React from 'react';
import { Marker as MarkerBase } from 'react-leaflet';
import L from 'leaflet';

import icon from '../assets/marker.svg';

const MarkerIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

const Marker = ({ position, children }) => (
    <MarkerBase position={position} icon={MarkerIcon}>
        {children}
    </MarkerBase>
);

export default Marker;
