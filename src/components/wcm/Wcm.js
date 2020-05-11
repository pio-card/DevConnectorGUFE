// create a new component file - Wcm.js RA 4.8
import React, { Fragment } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types";

//bring in components for WCM page
//import Items from "./Items";
//import ItemList from "./ItemList";
import CreateItem from "./wcm-forms/CreateItem";

//test for redux lifecycle
import Posts from "../wcm/Posts";
import Postx from "../wcm/Postx";
import PostForm from "./wcm-forms/PostForm";

//for http library
import axios from "axios";
axios.defaults.baseURL = `https://gzure.sse.codesandbox.io`; //proxy in package.json not working

const Wcm = () => {
  const onSubmit = async e => {
    e.preventDefault();
  };
  return (
    <div className="some-page-wrapper">
      <div className="row">
        <div className="column">
          <div className="blue-column">
            <form className="form" onSubmit={e => onSubmit(e)}>
              <label htmlFor="calmonthyear">Calendar (month and year):</label>
              <input type="month" id="calmonthyear" name="calmonthyear" />
              <input type="submit" />
            </form>
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
              <Postx />
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
            <PostForm />
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
