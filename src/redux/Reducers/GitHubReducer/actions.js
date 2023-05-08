// GitHub constants
import * as GITHUB_CONSTANTS from "./constants";

export const FetchGitHubRepos = () => async (dispatch) => {
  try {
    dispatch({
      type: GITHUB_CONSTANTS.GITHUB_FETCH_DATA_REQUEST,
    });

    const headers = {
      Authorization: "token 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",
    };

    const responseGitHub = await fetch("https://api.github.com/user/repos", {
      headers,
    });

    const dataGitHubResponse = await responseGitHub.json();

    dispatch({
      type: GITHUB_CONSTANTS.GITHUB_FETCH_DATA_SUCCESS,
      payload: dataGitHubResponse,
    });
    
  } catch (error) {
    dispatch({
      type: GITHUB_CONSTANTS.GITHUB_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
