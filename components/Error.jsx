import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h2>Error: {err.message}</h2>
      <pre>
        {err.statusText} - {err.status}
      </pre>
    </>
  );
};
