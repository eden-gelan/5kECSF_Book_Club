import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import ListingPage1 from './pages/listingPage1';
import HomePage from "./pages/homePage.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ListingPage1/>
  </React.StrictMode>
);



