// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// styles, icons
import styles from "./styles.module.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function ContentfulCertificate({ certificate }) {
  return (
    <div className={styles.certificateBody}>
      <header>
        <h3>{certificate?.fields.certificatePortfolioName}</h3>
      </header>

      {/* Certificate pic */}
      <div className={styles.certificateImgCont}>
        <img
          src={certificate?.fields.certificatePic.fields.file.url}
          alt={certificate?.fields.certificatePic.fields.description}
        />
      </div>

      {/* Btn container */}
      <div className={styles.actionBtnCont}>
        <Link to={`/certificates/${certificate?.fields.certificateUrl}`}>
          <span>
            <AiOutlineSafetyCertificate className={styles.certificateIcon} />
            View this Certificate
          </span>
        </Link>
      </div>
    </div>
  );
}
