//6.1.1 - create component layout file - Navbar.js
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types"; //RA 4.8.1

const NavbarBottom = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/home">
          <i className="fas fa-code" /> Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-code" /> Dashboard
        </Link>
      </li>
      <li>
        <Link to="/wcm">
          <i className="fas fa-code" /> WCM
        </Link>
      </li>
      <li>
        <Link to="/whm">
          <i className="fas fa-code" /> WHM
        </Link>
      </li>
      <li style={{ marginLeft: "auto" }}>
        <Link to="/setting">
          <i className="fas fa-user" />
          {""}
          <span className="hide-sm"> Settings</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="fas fa-user" />
          {""}
          <span className="hide-sm"> Profiles</span>
        </Link>
      </li>
      <li>
        <Link to="/report">
          <i className="fas fa-user" />
          {""}
          <span className="hide-sm"> Reports</span>
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbarBottom navbar bg-dark">
      {!loading && <Fragment>{isAuthenticated ? authLinks : null}</Fragment>}
    </nav>
  );
};
NavbarBottom.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  //coming from the auth reducer
});
export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  null //action list
)(NavbarBottom);
