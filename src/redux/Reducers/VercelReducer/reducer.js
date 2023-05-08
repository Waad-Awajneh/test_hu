// Tests Reducer Constants
import * as VERCEL_CONSTANTS from "./constants";

// VercelReducer state
const initialState = {
  VercelProjects: [],
  colorMode: "",
  loading: false,
  error: null,
};

// VercelReducer
const VercelReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERCEL_CONSTANTS.VERCEL_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VERCEL_CONSTANTS.VERCEL_FETCH_DATA_SUCCESS:
      return {
        ...state,
        VercelProjects: action.payload,
      };

    case VERCEL_CONSTANTS.VERCEL_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case VERCEL_CONSTANTS.VERCEL_COLOR_MODE:
      return {
        ...state,
        colorMode: action.payload,
      };

    default:
      return state;
  }
};

export default VercelReducer;
