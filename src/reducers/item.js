//two: import types
import { CREATE_ITEM, RETRIEVE_ITEMS_AUTH, ITEM_ERROR } from "../actions/types";

//define intial state
const initialState = {
  item: null,
  items: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action; //destruct
  switch (type) {
    case CREATE_ITEM:
      return {
        ...state,
        item: payload,
        items: [payload, ...state.items], //to have access to taskList rightaway
        loading: false
      };
    case RETRIEVE_ITEMS_AUTH:
      console.log("retrieving authorized itmes...");
      return {
        ...state,
        // items: [payload, ...state.items], //to have access to taskList rightaway
        items: payload, //to have access to taskList rightaway

        loading: false
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
