import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PassGen from './scripts/PassGen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PassGen />
  </React.StrictMode>
);
