// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

// Contentful API's
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// styles, icon
import styles from "./styles.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ArticlePage() {
  const nav = useNavigate();
  const { id } = useParams();

  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );
  const ContentfulArticles = ContentfulProjects.filter(
    (entry) => entry.sys.contentType.sys.id === "article"
  );

  const selectedArticle = ContentfulArticles.filter(
    (article) => id === article.fields.articleTags.linkTag
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

  return (
    <div className={styles.selectedArticlePage}>
      <div className={styles.selectedArticlePageCont}>
        <header>
          {/* Back to articles btn */}
          <span
            onClick={() => {
              nav("/articles");
            }}
            className={styles.backToArticlesBtn}
          >
            <IoMdArrowRoundBack />

            <span>Back to articles</span>
          </span>

          <h1>{selectedArticle[0]?.fields.articleTitle}</h1>

          <div>
            <span className={styles.articleDate}>
              {new Date(
                selectedArticle[0]?.fields.articlePublishedDate
              ).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <span>20 Views</span>
          </div>
        </header>

        <div className={styles.selectedArticleCont}>
          {/* Article cover picture */}
          <div className={styles.selectedArticleCover}>
            <img
              src={
                selectedArticle[0].fields.articleCoverPicture.fields.file.url
              }
              alt={`${selectedArticle[0].fields.articleCoverPicture.fields.file.fileName}`}
            />
          </div>

          {/* article main content */}
          <div className={styles.selectedArticleContent}>
            {documentToReactComponents(
              selectedArticle[0].fields.articleContent,
              renderNodesOptions
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
