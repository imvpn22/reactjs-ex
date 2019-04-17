import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between">
        <div className="navbar-brand">
          <a className="product-title" href="/"> Product Demo </a>
        </div>
        <div className="collapse navbar-collapse justify-content-end">
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            About
          </NavLink>
          <NavLink className="nav-link" exact activeClassName="active" to="/products">
            Products
          </NavLink>
        </div>
      </nav>
      )
  }
}

export default Header
