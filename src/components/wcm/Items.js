// create a new component file - Dashboard.js RA 4.8
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types";

//bring in the action for WCM page
import { getCurrentItems } from "../../actions/items";

const Items = ({ getCurrentItems, item: items }) => {
  useEffect(() => {
    getCurrentItems();
  }, []);

  return (
    <Fragment>
      <h2 className="my-2">Item List</h2>{" "}
      <table className="table">
        <thead>
          <tr>
            <th>Item Action</th>
            <th>Item Predicate</th>
          </tr>
        </thead>
        <tbody>
          {items.map(itm => (
            <tr key={itm._id}>
              <td>{itm.action}</td>
              <td>{itm.predicate}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
Items.propTypes = {
  getCurrentItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  item: state.item.items // prop from reducers must be same name
});

export default connect(
  //RA 4.7.2
  mapStateToProps, //mapStateToProps
  { getCurrentItems } //action list
)(Items);
