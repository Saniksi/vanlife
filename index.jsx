import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import './server.js';

import Home from './pages/Home';
import About from './pages/About';
import { Vans, loader as vansLoader } from './pages/Vans/Vans';
import {
  VansDetails,
  loader as vansDetailLoader,
} from './pages/Vans/VansDetails.jsx';
import { Layout } from './components/Layout.jsx';
import { Dashboard } from './pages/Host/Dashboard';
import { Income } from './pages/Host/Income';
import { Review } from './pages/Host/Review';
import { HostLayout } from './components/HostLayout';
import { HostVans, loader as hostVansLoader } from './pages/Host/HostVans.jsx';
import {
  HostVanDetail,
  loader as hostVanDetailLoader,
} from './pages/Host/HostVanDetail.jsx';
import { HostVanPricing } from './pages/Host/HostVanPricing.jsx';
import { HostVanPhotos } from './pages/Host/HostVanPhotos.jsx';
import { HostVanInfo } from './pages/Host/HostVanInfo.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Error } from './components/Error.jsx';
import { Login, loader as loginLoader } from './pages/Login.jsx';
import { requireAuthentication } from './utils/utils.js';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} loader={loginLoader} />
        <Route index element={<Home />} />

        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VansDetails />}
          loader={vansDetailLoader}
        />

        <Route path="about" element={<About />} />

        <Route
          path="host"
          element={<HostLayout />}
          loader={async () => await requireAuthentication()}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuthentication()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await requireAuthentication()}
          />
          <Route
            path="review"
            element={<Review />}
            loader={async () => await requireAuthentication()}
          />

          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansLoader}
            errorElement={<Error />}
          />

          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => await requireAuthentication()}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => await requireAuthentication()}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => await requireAuthentication()}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
      <Routes></Routes>
    </RouterProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
