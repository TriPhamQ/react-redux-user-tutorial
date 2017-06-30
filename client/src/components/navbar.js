import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">My App</Link>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/sign-in">Sign in</Link></li>
      </ul>
    </div>
  </div>
);

export default NavBar;