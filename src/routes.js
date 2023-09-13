import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home/homePage';
import ListingPage1 from './pages/listingPage1/listingPage1';
import SingleBook from './pages/singleBook/singleBook';

const Routeer = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/listing" component={ListingPage1} />
        <Route path="/single" component={SingleBook} />
      </Routes>
    </Router>
  );
};

export default Routeer;