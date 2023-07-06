import { Outlet, NavLink } from 'react-router-dom';

export const HostLayout = () => {
  const styleActive = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="review"
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
