import React from 'react';
import { Tooltip as TooltipBase } from 'react-leaflet';

const Tooltip = ({ country }) => (
<TooltipBase direction="bottom" offset={[0,0]} opacity={0.8} >
    {country}
</TooltipBase>);

export default Tooltip;