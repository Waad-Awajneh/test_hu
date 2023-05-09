// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// styles, icon
import styles from "./styles.module.css";
import { BiChevronRight } from "react-icons/bi";

export default function FetchedArticle({ ContentfulProject, index }) {
  return (
    <div className={styles.ContentflArticle}>
      <header>
        <Link to={`/articles/${ContentfulProject?.fields.articleTags.linkTag}`}>
          <h3>{ContentfulProject?.fields.articleTitle}</h3>
        </Link>

        <p>
          {`${ContentfulProject?.fields.articleSummary} `}

          <Link
            to={`/articles/${ContentfulProject?.fields.articleTags.linkTag}`}
          >
            <span>
              <span>
                Read more
                <BiChevronRight
                  className={`${styles.articleIcon} ${styles.readMoreIcon}`}
                />
              </span>
            </span>
          </Link>
        </p>
      </header>

      <div>
        <p className={styles.articleDate}>
          {new Date(
            ContentfulProject?.fields.articlePublishedDate
          ).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <ul>
          {ContentfulProject?.fields.articleTagName
            .split(", ")
            .map((articleTagName, index2) => {
              return (
                <li key={index2 + 1}>
                  <Link to={`/tags/${articleTagName}`}>{articleTagName}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
