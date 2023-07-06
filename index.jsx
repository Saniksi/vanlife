import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';

import Home from './pages/Home';
import About from './pages/About';
import { Vans } from './pages/Vans/Vans';
import { VansDetails } from './pages/Vans/VansDetails.jsx';
import { Layout } from './components/Layout.jsx';
import { Dashboard } from './pages/Host/Dashboard';
import { Income } from './pages/Host/Income';
import { Review } from './pages/Host/Review';
import { HostLayout } from './components/HostLayout';
import { HostVans } from './pages/Host/HostVans.jsx';
import { HostVanDetail } from './pages/Host/HostVanDetail.jsx';
import { HostVanPricing } from './pages/Host/HostVanPricing.jsx';
import { HostVanPhotos } from './pages/Host/HostVanPhotos.jsx';
import { HostVanInfo } from './pages/Host/HostVanInfo.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />

          <Route path="about" element={<About />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />

            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
