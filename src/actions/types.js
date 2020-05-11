//9.1 create a new action file - types.js RA-4.3

//alert types for alert reducer
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
// create new type(s) auth types for auth actions
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

//profile types for profile reducer
export const GET_PROFILE = "GET_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";

// item types for item reducer
export const CREATE_ITEM = "CREATE_ITEM";
export const RETRIEVE_ITEMS_AUTH = "RETRIEVE_ITEMS_AUTH"; //by current logged in and auth user
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ITEM_ERROR = "ITEM_ERROR";

//testing full-cycle redux
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';
