import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';
import { UserProvider } from './context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <LocationProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LocationProvider>
    </HashRouter>
  </React.StrictMode>
);
