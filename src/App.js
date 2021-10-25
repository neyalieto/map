import React from 'react';

import Route from './features/Route';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App({ mode, language, data }) {
  if (mode === 'route') return <Route language={language} data={data} />

  return null;
}

export default App;
