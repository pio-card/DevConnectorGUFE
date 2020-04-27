//6.1.2 - create component layout file - Landing.js
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types"; //RA 4.8.1

const Landing = ({ isAuthenticated }) => {
  //redirect user if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
  //coming from the auth reducer
});
export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  {} //action list
)(Landing);
