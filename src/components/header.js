//header.js

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="navbar-brand">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link">Add Asset</Link>
        </li>
    
      
    </ul>
    
  </div>
</nav>

      </header>
    );
  }
}

export default Header;