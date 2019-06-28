import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link to="/" style={{fontFamily: "monospace"}} className="col s5 brand-logo center black-text">
              <i className="material-icons">directions_run</i>XRSize
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;