import React from 'react';
import { Tooltip as TooltipBase } from 'react-leaflet';

const Tooltip = ({ children }) => (
  <TooltipBase direction="bottom" offset={[0,0]} opacity={0.9}>
    {children}
  </TooltipBase>
);

export default Tooltip;
