import { Outlet, NavLink, Link } from 'react-router-dom';
import React from 'react';

import loginIconURL from '../assets/images/avatar-icon.png';

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
          <Link to="login" className="login-link">
            <img src={loginIconURL} className="login-icon" />
          </Link>
        </nav>
      </header>
    </>
  );
};
