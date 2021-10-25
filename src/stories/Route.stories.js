import React from 'react';

import App from '../App';
import routeData from '../mockData/route';

export default {
  component: App,
  title: 'Route',
}

export const Route = () => <App mode="route" rawData={routeData} />;
