// react
import React from "react";
import { Link } from "react-router-dom";

// styles, icon
import styles from "./styles.module.css";
import { AiOutlineLink } from "react-icons/ai";

export default function FetchedProject({ project }) {
  const projectName = project?.name;
  const projectUrl = project?.url;

  function convertToTitleCase(str) {
    const words = str.split("-");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
  }

  const newProjectName = convertToTitleCase(projectName);

  return (
    <div className={styles.fetchedProjectBody}>
      <div className={styles.fetchedProjectContent}>
        <h2>{newProjectName}</h2>

        <Link to={projectUrl} target="_blank">
          <h3>
            <AiOutlineLink className={styles.linkIcon} />
            View this project
          </h3>
        </Link>
      </div>
    </div>
  );
}
