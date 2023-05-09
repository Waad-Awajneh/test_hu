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

    console.log({responseGitHub});

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
