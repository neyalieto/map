import React from 'react';

import Route from './features/Route';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App({ mode, rawData }) {
  if (mode === 'route') return <Route rawData={rawData} />

  return null;
}

export default App;
