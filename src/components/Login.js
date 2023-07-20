import React, { useContext, useState } from 'react';
import { login } from "../authContext/apiCalls"
import { AuthContext } from '../authContext/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // Add loginError state

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { dispatch } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Assuming the login function returns a promise (async function)
      await login({ email, password }, dispatch);
      // If login is successful, no need to show any error
      setLoginError(false);
    } catch (error) {
      // If login fails, set the loginError state to true
      setLoginError(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-6 font-bold text-gray-800">Sign in to Gmail</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>

          {/* Display error message if loginError is true */}
          {loginError && (
            <p className="text-red-500 text-sm mt-2">
              Invalid credentials. Please check your email and password.
            </p>
          )}
        </form>

        <div className='flex'>
          <p className='ml-2'>Don't have an account?</p>
          <button type="submit" className="create-account">
            <Link to="/register" className="link ml-2">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
