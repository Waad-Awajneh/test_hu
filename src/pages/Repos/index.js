// react
import React, { useState } from "react";
// react-redux
import { useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import FetchedRepo from "../../components/FetchedRepo";

// styles, icons
import styles from "./styles.module.css";

export default function Repos() {
  const [reposSearch, setReposSearch] = useState("");

  const { GitHubRepos } = useSelector((state) => state.GitHubReducer);
  const GitHubReposByDate = GitHubRepos?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  const searchedRepo = GitHubReposByDate?.filter((repo) =>
    repo.name
      .split("-")
      .map((word) => word?.charAt(0).toUpperCase() + word?.slice(1))
      .join(" ")
      .toLowerCase()
      .includes(reposSearch?.toLowerCase())
  );

  return (
    <div className={styles.reposPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Repos, Titi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.reposCont}>
        <header>
          <h1>Repositories</h1>
        </header>

        <div className={styles.reposContentCont}>
          <div className={styles.reposSearchCont}>
            <input
              type="text"
              placeholder="Search repositories by name 🔎"
              onChange={(e) =>
                setReposSearch(e.target.value.toLocaleLowerCase())
              }
            />

            <span className={styles.searchedReposNum}>
              {`${searchedRepo?.length} ${
                searchedRepo?.length === 1 ? "Repo " : "Repos"
              }`}
            </span>
          </div>

          <div className={styles.mainRepos}>
            {searchedRepo?.length > 0 ? (
              searchedRepo?.map((repo, index) => (
                <FetchedRepo key={index} repo={repo} />
              ))
            ) : (
              <p className={styles.noRepositories}>No repositories</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
