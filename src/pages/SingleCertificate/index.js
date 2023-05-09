// react
import React from "react";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// Contentful API's
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Component
import DoActionBtn from "./../../components/DoActionBtn/index";

// styles, icons
import styles from "./styles.module.css";
import {
  BsCalendarDate,
  BsPersonLinesFill,
  BsStarFill,
  BsStarHalf,
  BsPersonHearts,
} from "react-icons/bs";
import { FaUniversity, FaStarHalf } from "react-icons/fa";
import { RiNumbersFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function SingleCertificate() {
  const nav = useNavigate();
  const { id } = useParams();

  // Contentful files
  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );
  const certificatesContentful =
    ContentfulProjects?.portfolioCertificateEntries;

  const selectedCertificate = certificatesContentful?.filter(
    (certificate) => id === certificate.fields.certificateUrl
  );

  const renderNodesOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <span className={styles.boldTextContentful}>{text}</span>
      ),
      [MARKS.ITALIC]: (text) => (
        <span className={styles.italicTextContentful}>{text}</span>
      ),
      [MARKS.UNDERLINE]: (text) => (
        <span className={styles.underLineTextContentful}>{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={styles.uListContentful}>{children}</ul>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styles.paraTextContentful}>{children}</p>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <a href={`/blog/${node.data.target.fields.slug}`}>
              {node.data.target.fields.title}
            </a>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre className={styles.code}>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }

        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            className={styles.imbeddedImgContentful}
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };

  // convert numerical rating "3, 4.5, etc" to starts "Full & half-star"
  function mapToStarRating(number) {
    const fullStars = Math.floor(number);
    const halfStars = number % 1 === 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = Array(fullStars)
      .fill("full")
      .concat(Array(halfStars).fill("half"))
      .concat(Array(emptyStars).fill("empty"));

    return stars;
  }

  return (
    <div className={styles.certificatePage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{selectedCertificate[0]?.fields.certificatePortfolioName}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.certificatePageCont}>
        <header>
          <h1>
            <span
              onClick={() => {
                nav("/certificates");
              }}
            >
              <IoMdArrowRoundBack className={styles.backIcon} />
            </span>
            {selectedCertificate[0]?.fields.certificatePortfolioName}
          </h1>
        </header>

        {/* Certificate pic */}
        <div className={styles.certificateImgCont}>
          <img
            src={selectedCertificate[0]?.fields.certificatePic.fields.file.url}
            alt={
              selectedCertificate[0]?.fields.certificatePic.fields.description
            }
          />
        </div>

        {/* Certificate details */}
        <div className={styles.certificateAccomplishedDetails}>
          <div className={styles.certificateAccomplishedDetailsCont}>
            {/* Institution details */}
            <div className={styles.certificateInstitutionSide}>
              <span className={styles.certificateCardIconCont}>
                <FaUniversity className={styles.certificateCardIcon} />
              </span>

              <span className={styles.certificateInstitutionName}>
                {selectedCertificate[0]?.fields.certificateInstitution}
              </span>
            </div>

            {/* Studying status */}
            <div className={styles.certificateStudyingStatus}>
              <span className={styles.certificateCardIconCont}>
                <BsPersonLinesFill className={styles.certificateCardIcon} />
              </span>

              <span className={styles.certificateStudyingStatusText}>
                {selectedCertificate[0]?.fields.studyingStatus}
              </span>
            </div>

            {/* Accomplished date */}
            <div className={styles.certificateAccomplishedDate}>
              <span className={styles.certificateCardIconCont}>
                <BsCalendarDate className={styles.certificateCardIcon} />
              </span>

              <span className={styles.certificateDateText}>
                {/* Date in this style: 18 Aug, 2022 */}

                {`${new Date(
                  selectedCertificate[0]?.fields.certificateAccomplishedDate
                ).getDate()} ${new Intl.DateTimeFormat("en", {
                  month: "short",
                }).format(
                  new Date(
                    selectedCertificate[0]?.fields.certificateAccomplishedDate
                  )
                )}, ${new Date(
                  selectedCertificate[0]?.fields.certificateAccomplishedDate
                ).getFullYear()}`}
              </span>
            </div>

            {/* Ratings */}
            <div className={styles.certificateRatings}>
              <div className={styles.certificateInstitutionRating}>
                <span className={styles.certificateCardIconCont}>
                  <RiNumbersFill className={styles.certificateCardIcon} />
                </span>

                <span className={styles.certificateInstRatingNum}>
                  {mapToStarRating(
                    selectedCertificate[0]?.fields.certificateInstitutionRating
                  )?.map((star, i) =>
                    star === "full" ? (
                      <span className={styles.ratingStar} key={i}>
                        <BsStarFill className={styles.certificateCardSubIcon} />
                      </span>
                    ) : star === "half" ? (
                      <span className={styles.ratingStar} key={i}>
                        <FaStarHalf className={styles.certificateCardSubIcon} />
                      </span>
                    ) : (
                      ""
                    )
                  )}
                </span>
              </div>

              <div className={styles.certificatePersonalRating}>
                <span className={styles.certificateCardIconCont}>
                  <BsPersonHearts className={styles.certificateCardIcon} />
                </span>

                <span className={styles.certificatePersonalRatingNum}>
                  {mapToStarRating(
                    selectedCertificate[0]?.fields.personalCertificateRating
                  )?.map((star, i) =>
                    star === "full" ? (
                      <span className={styles.ratingStar} key={i}>
                        <BsStarFill className={styles.certificateCardSubIcon} />
                      </span>
                    ) : star === "half" ? (
                      <span className={styles.ratingStar} key={i}>
                        <FaStarHalf className={styles.certificateCardSubIcon} />
                      </span>
                    ) : (
                      ""
                    )
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.downloadCertificateCont}>
            <span>
              <a
                href={
                  selectedCertificate[0]?.fields.certificateDocFile.fields.file
                    .url
                }
                download={
                  selectedCertificate[0]?.fields.certificateDocFile.fields.title
                }
              >
                <DoActionBtn BtnTextContent={"Download Certificate"} />
              </a>
            </span>
          </div>
        </div>

        {/* certificate description */}
        <div className={styles.certificateDesc}>
          <header>
            <h2>About this certificate</h2>
          </header>

          {documentToReactComponents(
            selectedCertificate[0]?.fields.certificateFullDescription,
            renderNodesOptions
          )}
        </div>
      </div>
    </div>
  );
}
