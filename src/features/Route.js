import React from 'react';

import Map from '../components/Map';
import Marker from '../components/Marker';
import useRouteData from '../hooks/useRouteData';
import Polyline from '../components/Polyline';
import Tooltip from '../components/Tooltip';

function Route({ language, data }) {
  const { bounds, primary, secondary } = useRouteData(data);

  return (
    <Map language={language} bounds={bounds}>
      {primary.map(item => (
        <Marker position={item.coordinates} slug={item.slug} key={item.id}>
          <Tooltip>{item.name}</Tooltip>
        </Marker>
      ))}

      {primary.length > 1 && <Polyline positions={primary.map(item => item.coordinates)} />}
      {secondary.map((positions, index) => (
        <Polyline positions={positions} variant="secondary" key={index} />
      ))}
    </Map>
  );
}

export default Route;
