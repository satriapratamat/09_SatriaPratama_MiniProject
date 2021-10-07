import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

const reducer = combineReducers({
  news: newsReducer,
});

export default reducer;
