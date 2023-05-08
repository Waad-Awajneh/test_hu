// react
import React, { useState } from "react";
// react-redux
import { useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// components
import ContentfulCertificate from "../../components/ContentfulCertificate";

// styles, icons
import styles from "./styles.module.css";

export default function Certificates() {
  const [selectedTag, setSelectedTag] = useState("All");

  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );
  const certificatesContentful = ContentfulProjects.filter(
    (entry) => entry.sys.contentType.sys.id === "portfolioCertificate"
  );

  const taggedCertificates = certificatesContentful.filter((certificate) =>
    certificate.fields.certificateSearchedTags
      .toLowerCase()
      .includes(selectedTag.toLowerCase())
  );

  const certificatesContentfulByDate = certificatesContentful?.sort(
    (a, b) =>
      new Date(b.fields.certificateAccomplishedDate) -
      new Date(a.fields.certificateAccomplishedDate)
  );

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className={styles.certificatesPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Certificates, Titi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.certificatesCont}>
        {/* Certificates page header */}
        <div className={styles.certificatesHeader}>
          <h1>Certificates</h1>
          <div className={styles.searchTagsCont}>
            <span
              className={
                selectedTag === "All"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("All")}
            >
              All
            </span>

            <span
              className={
                selectedTag === "Web Design"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("Web Design")}
            >
              Web Design
            </span>

            <span
              className={
                selectedTag === "Graphic Design"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("Graphic Design")}
            >
              Graphic Design
            </span>

            <span
              className={
                selectedTag === "Engineering"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("Engineering")}
            >
              Engineering
            </span>

            <span
              className={
                selectedTag === "Google"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("Google")}
            >
              Google
            </span>

            <span
              className={
                selectedTag === "Meta"
                  ? styles.selectedTag
                  : styles.unselectedTag
              }
              onClick={() => handleTagClick("Meta")}
            >
              Meta
            </span>

            <span className={styles.searchCont}>
              <input
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                }}
                type="text"
                placeholder="Search Topics 🔎"
              />
            </span>
          </div>
        </div>

        <div className={styles.certificatesGridCont}>
          {selectedTag === "All" ? (
            certificatesContentfulByDate?.map((certificate, index) => (
              <div className={styles.certificatesCardsCont}>
                <ContentfulCertificate key={index} certificate={certificate} />
              </div>
            ))
          ) : taggedCertificates.length > 0 ? (
            taggedCertificates?.map((certificate, index) => (
              <div className={styles.certificatesCardsCont}>
                <ContentfulCertificate key={index} certificate={certificate} />
              </div>
            ))
          ) : (
            <p className={styles.noCertificates}>
              No Certificates for this Topic
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
