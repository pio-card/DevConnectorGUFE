import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { create } from "../../../actions/items";

const DisplayCalendar = ({ create }) => {
  const [formData, setFormData] = useState({
    calmonthyear: ""
  });

  const onChange = e =>
    setFormData({ formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Display A Calendar</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> select a month and year to display
        a calendar
      </p>
      <small>* = required field</small>

      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          create(formData);
        }}
      >
        <label htmlFor="calmonthyear">Calendar (month and year):</label>
        <input
          type="month"
          id="calmonthyear"
          name="calmonthyear"
          onChange={e => onChange(e)}
        />
        <input type="submit" />
      </form>
    </Fragment>
  );
};
DisplayCalendar.propTypes = {
  create: PropTypes.func.isRequired
};
export default connect(
  null,
  { create }
)(DisplayCalendar);
