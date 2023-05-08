// redux
import { combineReducers } from "redux";

// reducers
import VercelReducer from "./Reducers/VercelReducer/reducer";
import NetlifyReducer from "./Reducers/NetlifyReducer/reducer";
import GitHubReducer from "./Reducers/GitHubReducer/reducer";
import ContentfulReducer from "./Reducers/ContentfulReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  VercelReducer,
  NetlifyReducer,
  GitHubReducer,
  ContentfulReducer,
});

export default AllReducers;
