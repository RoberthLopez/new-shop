import React, { useRef } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Login
          </button>
          <Link to="/password-recovery">Forgot my password</Link>
        </form>
        <Link to="/register">
          <button className="secondary-button signup-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
