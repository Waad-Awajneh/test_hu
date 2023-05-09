// react
import React from "react";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// component
import FetchedArticle from "../../components/FetchedArticle";

// styles, icon
import styles from "./styles.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ArticleTags() {
  const { id } = useParams();
  const nav = useNavigate();

  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );

  // const ContentfulArticles = ContentfulProjects.filter(
  //   (entry) => entry.sys.contentType.sys.id === "article"
  // );

  // const filterFetchedArticles = ContentfulArticles.filter((article) =>
  //   article.fields.articleTagName.toLowerCase().includes(id?.toLowerCase())
  // );

  return (
    <div className={styles.articleTagsPage}>
      <div className={styles.articleTagsCont}>
        <header>
          <h1>
            Tag:
            <span> {id}</span>
          </h1>

          <span
            onClick={() => {
              nav("/articles");
            }}
            className={styles.backToArticlesBtn}
          >
            <IoMdArrowRoundBack />

            <span>Back to articles</span>
          </span>
        </header>

        <div className={styles.falteredArticlesCont}>
          {/* {filterFetchedArticles?.map((article) => (
            <FetchedArticle ContentfulProject={article} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
