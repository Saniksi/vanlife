import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loginUser } from '../utils/api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const [statusForm, setStatusForm] = useState('idle');
  const [error, setError] = useState(null);
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    setStatusForm('submitting');
    setError(null);

    loginUser(loginFormData)
      .then((data) => console.log('data===', data))
      .catch((err) => setError(err))
      .finally(() => setStatusForm('idle'));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login-container">
      {message && <h3 class="red">{message}</h3>}
      <h1>Sign in to your account</h1>
      {error && <h3 class="red">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={statusForm === 'submitting'}>
          {statusForm === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
};
