import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../Icon_and_image/Rectangle 2.png';

function Navigation() {
  return (
    <section className="navigation">
      <img src={logo} alt="EthioVote logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li className="account-menu">
          ☰
          <ul className="dropdown">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
