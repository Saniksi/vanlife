import { Outlet, Link } from 'react-router-dom';
import React from 'react';


export const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Outlet />
    </React.Fragment>
  );
};
