import React,{useCallback} from 'react';
import { Marker as MarkerBase } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from '../assets/markerIcon.svg';
import markerShadow from '../assets/markerShadow.svg';

const MarkerIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    shadowSize: [24, 12],
    shadowAnchor: [12, 6],
});

const Marker = ({ position, children, slug }) => {
    const handleClick = useCallback(
     () => {
        window.location.hash = slug;
    }, [slug])
    return (
        <MarkerBase position={position} icon={MarkerIcon} eventHandlers={{ click: handleClick }} >
            {children}
        </MarkerBase>
    );
};

export default Marker;
