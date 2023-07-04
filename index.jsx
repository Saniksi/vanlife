import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';

import Home from './pages/Home';
import About from './pages/About';
import { Vans } from './pages/Vans';
import { VansDetails } from './pages/VansDetail.jsx';
import { Layout } from './components/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
