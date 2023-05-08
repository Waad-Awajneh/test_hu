// Netlify Reducer Constants
import * as NETLIFY_CONSTANTS from "./constants";

// NetlifyReducer state
const initialState = {
  NetlifyProjects: [],
  loading: false,
  error: null,
};

// NetlifyReducer
const NetlifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_SUCCESS:
      return {
        ...state,
        NetlifyProjects: action.payload,
      };

    case NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default NetlifyReducer;
