import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pkmn from './scripts/Pkmn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Pkmn />);