// import { apiDataSlice, moviesSlice } from "./APIStore/apiSlice"
// import {counterSlice} from './Reducers/counterSlice';
import Counter from "./Reducers/Counter";
import Movies from "./Reducers/Movies/Movies";
import { combineReducers } from "redux";
import SuccessMessage from "./Reducers/SuccessMessage";
// import LoginSignUpReducer from "./Reducers/LoginSignup/LoginSignup";

const rootReducer = combineReducers({
  // appData: apiDataSlice,
  // moviesData: moviesSlice,
  Count:Counter,
  MovieData:Movies,
  SuccessMessagePopup:SuccessMessage
  // loginSignUpData: LoginSignUpReducer
  // product: counterSlice,
});

export default rootReducer;