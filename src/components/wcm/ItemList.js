// create a new component file - Dashboard.js RA 4.8
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux"; //RA 4.6. 1
import PropTypes from "prop-types";

//bring in the action for WCM page
import { getCurrentItems } from "../../actions/items";
const ViewItemList = ({ getCurrentItems, item: { items, loading } }) => {
  useEffect(() => {
    getCurrentItems();
  }, [getCurrentItems]);
  return (
    <Fragment>
      {loading ? null : (
        <Fragment>
          <div>
            {items.length > 0 ? (
              items.map(itom => (
                <ul key={itom._id}>
                  <li> {itom._id}</li>
                </ul>
              ))
            ) : (
              <h4>No items found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewItemList.propTypes = {
  getCurrentItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { getCurrentItems }
)(ViewItemList);
