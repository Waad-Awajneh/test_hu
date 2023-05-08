// react
import React from "react";
import { Link } from "react-router-dom";

// styles, icon
import styles from "./styles.module.css";
import { AiOutlineLink } from "react-icons/ai";

export default function FetchedProject({ project }) {
  const projectName = project?.name;
  const projectUrl = project?.url;

  return (
    <div className={styles.fetchedProjectBody}>
      <div className={styles.fetchedProjectContent}>
        <h2>{projectName}</h2>

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
