// react
import React from "react";

// styles, icons
import styles from "./styles.module.css";
import {
  AiOutlineEye,
  AiOutlineFieldTime,
  AiOutlineLink,
  AiOutlineUnlock,
  AiOutlineLock,
} from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";

export default function FetchedRepo({ repo }) {
  const repoName = repo?.name;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    window.alert("Link is copied!");
  };

  function convertToTitleCase(str) {
    const words = str.split("-");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
  }

  const newRepoName = convertToTitleCase(repoName);

  return (
    <div className={styles.repoCard}>
      <div className={styles.repoCardLeft}>
        {/* Repo name */}
        <span className={styles.repoCardName}>
          {newRepoName}
        </span>

        {/* Repo desc */}
        <p className={styles.repoCardDesc}>
          {repo?.description ? repo?.description : "Un completed project."}
        </p>

        {/* repo details */}
        <div className={styles.repoCardDetails}>
          {/* repo admin */}
          <div>
            <RiAdminLine className={styles.repoCardIcon} />
            <span>
              {repo?.owner.login.charAt(0).toUpperCase() +
                repo?.owner.login.slice(1)}
            </span>
          </div>

          {/* repo visibility state */}
          <div>
            {repo?.visibility === "public" ? (
              <AiOutlineUnlock className={styles.repoCardIcon} />
            ) : (
              <AiOutlineLock className={styles.repoCardIcon} />
            )}

            <span>{`${
              repo?.visibility.charAt(0).toUpperCase() +
              repo?.visibility.slice(1)
            }`}</span>
          </div>
        </div>
      </div>

      <div className={styles.repoCardRight}>
        {/* repo admin */}
        <div className={styles.adminAndVisibilityHide}>
          <RiAdminLine className={styles.repoCardIcon} />
          <span>
            {repo?.owner.login.charAt(0).toUpperCase() +
              repo?.owner.login.slice(1)}
          </span>
        </div>

        {/* repo visibility state */}
        <div className={styles.adminAndVisibilityHide}>
          {repo?.visibility === "public" ? (
            <AiOutlineUnlock className={styles.repoCardIcon} />
          ) : (
            <AiOutlineLock className={styles.repoCardIcon} />
          )}

          <span>{`${
            repo?.visibility.charAt(0).toUpperCase() + repo?.visibility.slice(1)
          }`}</span>
        </div>

        {/* Number of views */}
        <div className={styles.repoCardViews}>
          <AiOutlineEye className={styles.repoCardIcon} />

          <span>
            {repo?.watchers_count}
            {repo?.watchers_count === 1 ? " View" : " Views"}
          </span>
        </div>

        {/* Published date */}
        <div className={styles.repoCardDate}>
          <AiOutlineFieldTime className={styles.repoCardIcon} />

          <span>{repo?.created_at.slice(0, 10)}</span>
        </div>

        {/* clone repo */}
        <div className={styles.repoCardClone}>
          <AiOutlineLink className={styles.repoCardIcon} />

          {repo?.visibility === "public" ? (
            <span onClick={() => copyToClipboard(repo.clone_url)}>
              Clone repo
            </span>
          ) : (
            <span className={styles.preventClone}>Clone repo</span>
          )}
        </div>
      </div>
    </div>
  );
}
