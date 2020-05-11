import axios from "axios";
import { setAlert } from "./alert";

import { CREATE_ITEM, RETRIEVE_ITEMS_AUTH, ITEM_ERROR } from "./types";

//REGISTER ITEM - CREATE
export const create = (formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/items", formData, config);
    dispatch({
      type: CREATE_ITEM,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ITEM_ERROR
    });
  }
};

//Get current user's items
export const getCurrentItems = () => async dispatch => {
  console.log("getcurrentitem...")
  try {
    const res = await axios.get("/api/items/me");
    //dispatch to reducer
    dispatch({
      type: RETRIEVE_ITEMS_AUTH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
