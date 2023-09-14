import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/homePage';
import ListingPage1 from './pages/listingPage1/listingPage1';
import SingleBook from './pages/singleBook/singleBook';
import Nav from './commonComponents/nav';

const Routeer = () => {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} /> {/* Update this line */}
        <Route path="/listing" element={<ListingPage1 />} />
        <Route path="/single" element={<SingleBook />} /> {/* Update this line */}
      </Routes>
    </Router>
  );
};

export default Routeer;