import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './service-worker-registration.js';
registerServiceWorker();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
