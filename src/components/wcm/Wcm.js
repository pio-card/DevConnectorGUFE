// create a new component file - Wcm.js RA 4.8
import React, { Fragment } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types";

//bring in components for WCM page
import Items from "./Items";
import DisplayCalendar from "./wcm-forms/DisplayCalendar";
import CreateItem from "./wcm-forms/CreateItem";

//for http library
import axios from "axios";
axios.defaults.baseURL = `https://gzure.sse.codesandbox.io`; //proxy in package.json not working

const Wcm = () => {
  return (
    <div className="some-page-wrapper">
      <div className="row">
        <div className="column">
          <div className="blue-column">
            <DisplayCalendar />
          </div>
        </div>
        <div className="column">
          <div className="green-column">Some Text in Column Two</div>
        </div>
      </div>
      <div className="row 2">
        <div className="column">
          <div className="orange-column">
            <Fragment>
              <Items />
            </Fragment>
          </div>
        </div>
        <div className="column">
          <div className="blue-column">Some Text in Row 2, Column Two</div>
        </div>
      </div>
      <div className="row 3">
        <div className="column">
          <div className="green-column">
            <CreateItem />
          </div>
        </div>
        <div className="column">
          <div className="orange-column">Some Text in Row 3, Column Two</div>
        </div>
      </div>
    </div>
  );
};
Wcm.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated //coming from the auth reducer
});

export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  null //action list
)(Wcm);
