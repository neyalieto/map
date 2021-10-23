import React from 'react';
import { Polyline as PolylineBase } from 'react-leaflet';

const pathOptions = {
    primary: { color: '#058fff' },
    secondary: { color: '#f9a824' },
};

const Polyline = ({ positions, variant = 'primary' }) => (
    <PolylineBase positions={positions} pathOptions={pathOptions[variant]} />
);

export default Polyline;
