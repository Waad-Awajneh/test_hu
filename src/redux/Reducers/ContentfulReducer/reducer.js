// CONTENTFUL Reducer Constants
import * as CONTENTFUL_CONSTANTS from "./constants";

// NetlifyReducer state
const initialState = {
  ContentfulProjects: [],
  loading: false,
  error: null,
};

// ContentfulReducer
const ContentfulReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_SUCCESS:
      return {
        ...state,
        ContentfulProjects: action.payload,
      };

    case CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ContentfulReducer;
