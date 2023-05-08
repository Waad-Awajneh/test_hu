// CONTENTFUL Reducer Constants
import * as CONTENTFUL_CONSTANTS from "./constants";

// Contentful API
import * as contentful from "contentful";

export const fetchContentfulProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_REQUEST,
    });

    const client = contentful.createClient({
      space: "g4e8h2r1b3wo",
      accessToken: "YyoNcEU9oyvtoVN3abu0QD6KQ2yuZ-eQDH3EqurHqkE",
    });
    const entries = await client.getEntries({
      content_type: ["article", "portfolioCertificate"],
    });

    dispatch({
      type: CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_SUCCESS,
      payload: entries.items,
    });
  } catch (error) {
    dispatch({
      type: CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};