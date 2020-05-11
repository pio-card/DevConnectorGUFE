//2.4 - create a root reducer file - index.js
import { combineReducers } from "redux";
import alert from "./alert"; // RA-4.2
import auth from "./auth"; // RA-4.2
import profile from "./profile"; // RA-4.2
import item from "./item"; // RA-4.2
import post from "./post";

export default combineReducers({
  //list reducers to pass as args to combineReducers function
  alert,
  auth,
  profile,
  items: item, //test: changed from  item to items:item
  posts: post
});
