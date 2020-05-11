//6.1.1 - create component layout file - Navbar.js
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types"; //RA 4.8.1

import { logout } from "../../actions/auth";

const NavbarTop = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul style={{ marginLeft: "auto" }}>
      <li>
        <Link to="/account">
          <i className="fas fa-user" />
          {""}
          <span className="hide-sm"> Account</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />
          {""}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="#!">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
NavbarTop.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  //coming from the auth reducer
});
export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  { logout } //action list
)(NavbarTop);
