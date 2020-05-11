import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentItems } from "../../actions/items";

class Postx extends Component {
  UNSAFE_componentWillMount() {
    this.props.getCurrentItems();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newItem) {
      this.props.items.unshift(nextProps.newItem);
    }
  }

  render() {
    const postItems = this.props.items.map(stuff => (
      <div key={stuff._id}>
        <h3>{stuff.action}</h3>
        <p>{stuff.predicate}</p>
      </div>
    ));
    return (
      <div>
        <h1>Items</h1>
        {postItems}
      </div>
    );
  }
}

Postx.propTypes = {
  getCurrentItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object
};

const mapStateToProps = state => ({
  items: state.items.items,
  newItem: state.item
});

export default connect(
  mapStateToProps,
  { getCurrentItems }
)(Postx);
