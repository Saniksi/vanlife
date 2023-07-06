import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <h2>This is Dashboard Page</h2>
      <Outlet />
    </>
  );
};
