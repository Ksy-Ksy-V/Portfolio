import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles'; 

import App from './App';

import './index.css';
import lightMode from './styles/lightMode';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
