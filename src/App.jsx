import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './layout/Header';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Share from './components/Share';
import FAQ from './components/FAQ';
import Vaccancy from './components/Vaccancy';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={'/About'}          element={<About/>}></Route>
          <Route path={'/Contact'}        element={<Contact/>}></Route>
          <Route path={'/Services'}       element={<Services/>}></Route>
          <Route path={'/Vacnncy'}        element={<Vaccancy/>}></Route>
          <Route path={'/Shares'}          element={< Share/>}></Route>
          <Route path={'/FAQ'}            element={< FAQ/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
