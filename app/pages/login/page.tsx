import React from 'react';
import HomePage from '../../homepage';
// import Layout from '../../layout';

const LoginPage = () => {
  return (
    <HomePage>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </HomePage>
  );
}

export default LoginPage;
