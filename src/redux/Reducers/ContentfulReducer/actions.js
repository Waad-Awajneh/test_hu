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
      accessToken: "MWi2kVFGBpQopWJgaVhyrXUAyRKpQ5vOJGzqfwYgGOU",
    });

    const portfolioCertificateEntries = await client.getEntries({
      content_type: "portfolioCertificate",
    });

    const articleEntries = await client.getEntries({
      content_type: "article",
    });

    const portfolioResumeEntry = await client.getEntries({
      content_type: "portfoliosResumeDocument",
    });

    const contentfulEntries = {
      portfolioCertificateEntries: portfolioCertificateEntries.items,
      articleEntries: articleEntries.items,
      portfolioResumeEntry: portfolioResumeEntry.items,
    };

    dispatch({
      type: CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_SUCCESS,
      payload: contentfulEntries,
    });
  } catch (error) {
    dispatch({
      type: CONTENTFUL_CONSTANTS.CONTENTFUL_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
