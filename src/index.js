import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (!window.Neyalieto) window.Neyalieto = {};

window.Neyalieto.initMap = (el, props) => ReactDOM.render(<App {...props} />, el);
