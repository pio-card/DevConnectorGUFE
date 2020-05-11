import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { create } from "../../../actions/items";

const CreateItem = ({ create, history }) => {
  const [formData, setFormData] = useState({
    action: "",
    predicate: ""
  });
  //destructure the state variable formData
  const { action, predicate } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Item</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any item to be planned and
        scheduled
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          create(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Item Action"
            name="action"
            value={action}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Item Predicate"
            name="predicate"
            value={predicate}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};
CreateItem.propTypes = {
  create: PropTypes.func.isRequired
};
export default connect(
  null,
  { create }
)(withRouter(CreateItem));
