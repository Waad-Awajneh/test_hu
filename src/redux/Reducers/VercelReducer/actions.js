// Vercel reducer constants
import * as VERCEL_CONSTANTS from "./constants";
// axios
import axios from "axios";

export const FetchVercelProjects = () => async (dispatch) => {
  dispatch({
    type: VERCEL_CONSTANTS.VERCEL_FETCH_DATA_REQUEST,
  });

  try {
    const VERCEL_API_TOKEN = "oQ6ojV7HdSGG7Uu8V1gzVnyl";
    const response = await axios.get("https://api.vercel.com/v4/projects", {
      headers: { Authorization: `Bearer ${VERCEL_API_TOKEN}` },
    });
    const VercelProjects = response.data.projects;
    const VercelProjectsDetails = VercelProjects.map((project) => {
      return {
        name: project.name,
        url: `http://${project.alias[0].domain}`,
      };
    });

    dispatch({
      type: VERCEL_CONSTANTS.VERCEL_FETCH_DATA_SUCCESS,
      payload: VercelProjectsDetails,
    });
  } catch (error) {
    dispatch({
      type: VERCEL_CONSTANTS.VERCEL_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const ColorMode = (colorMode) => (dispatch) => {
  dispatch({
    type: VERCEL_CONSTANTS.VERCEL_COLOR_MODE,
    payload: colorMode,
  });
};
