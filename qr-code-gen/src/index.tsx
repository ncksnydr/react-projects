import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QrCodeGen from './scripts/QrCodeGen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QrCodeGen />
  </React.StrictMode>
);
