import { Outlet, NavLink, Link } from 'react-router-dom';
import React from 'react';

export const Header = () => {
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : null)}
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
};
