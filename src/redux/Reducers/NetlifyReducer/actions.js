// Netlify Reducer Constants
import * as NETLIFY_CONSTANTS from "./constants";

export const FetchNetlifyProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_REQUEST,
    });

    const NETLIFY_TOKEN = "DcOYw4YPlaGdoq_1rQvwcfsFEH3_d27HiGEA8l9Pkis";
    const response = await fetch("https://api.netlify.com/api/v1/sites", {
      headers: {
        Authorization: `Bearer ${NETLIFY_TOKEN}`,
      },
    });

    const data = await response.json();
    const NetlifyProjectsDetails = data.map((site) => {
      return {
        name: site.name,
        url: site.url,
      };
    });

    dispatch({
      type: NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_SUCCESS,
      payload: NetlifyProjectsDetails,
    });
  } catch (error) {
    dispatch({
      type: NETLIFY_CONSTANTS.NETLIFY_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
