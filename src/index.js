import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import ListingPage1 from './pages/listingPage1/listingPage1';
import HomePage from "./pages/home/homePage.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);



