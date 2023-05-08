// GitHub constants
import * as GITHUB_CONSTANTS from "./constants";

// GitHub state
const initialState = {
  GitHubRepos: [],
  loading: false,
  error: null,
};

const GitHubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_CONSTANTS.GITHUB_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GITHUB_CONSTANTS.GITHUB_FETCH_DATA_SUCCESS:
      return {
        ...state,
        GitHubRepos: action.payload,
      };

    case GITHUB_CONSTANTS.GITHUB_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default GitHubReducer;
