import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid">
                <NavLink className="navbar-brand text-white" to="/">
                  A.Tech
                </NavLink>
                <button
                  className="navbar-toggler "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active"
                        exact
                        className="nav-link active text-white"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link text-white" to="/services" exact>
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="menu-active" className="nav-link text-white" to="/about" exact>
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link text-white" to="/contact" exact>
                        Contact
                      </NavLink>
                    </li>
                   
                  </ul>
                 
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
