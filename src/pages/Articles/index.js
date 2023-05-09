// react
import React, { useEffect, useState } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import FetchedArticle from "../../components/FetchedArticle";

// action creators
import { fetchContentfulProjects } from "../../redux/Reducers/ContentfulReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { CiSearch } from "react-icons/ci";

export default function Articles() {
  const dispatch = useDispatch();

  // Contentful files
  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );
  const articlesContentful = ContentfulProjects?.articleEntries;

  const [searchedValue, setSearchedValue] = useState("");
  const searchedArticle = articlesContentful?.filter((article) =>
    article?.fields.articleTags.articleFilterTag
      .toLowerCase()
      .includes(searchedValue?.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchedValue(e);
  };

  useEffect(() => {
    dispatch(fetchContentfulProjects());
  }, []);

  return (
    <div className={styles.articlesPage}>
      <div className={styles.articlesCont}>
        {/* Helmet */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Typed Articles</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <header>
          <h1>Articles</h1>

          <p>
            On this page, you will find a selection of my written articles. You
            can browse through these articles by clicking on any of the tags,
            such as <strong>Coding</strong> or <strong>JavaScript</strong>, or by
            typing a specific tag in the search bar to filter the articles
            accordingly.
          </p>
        </header>

        {/* search bar */}
        <div className={styles.articlesSearch}>
          <CiSearch className={styles.searchIcon} />

          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Search by tags"
          />
        </div>

        {/* Contentful articles */}
        <div className={styles.articlesContent}>
          <div className={styles.ContentflArticles}>
            {searchedArticle?.length === 0 ? (
              <p className={styles.noArticles}>No articles</p>
            ) : (
              searchedArticle?.map((ContentfulProject, index) => (
                <FetchedArticle
                  key={index}
                  ContentfulProject={ContentfulProject}
                  index={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
