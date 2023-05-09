// react
import React, { useEffect } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import { FetchVercelProjects } from "../../redux/Reducers/VercelReducer/actions";
import { FetchNetlifyProjects } from "../../redux/Reducers/NetlifyReducer/actions";
import { FetchGitHubRepos } from "../../redux/Reducers/GitHubReducer/actions";
import { fetchContentfulProjects } from "../../redux/Reducers/ContentfulReducer/actions";

// components
import FetchedProject from "../../components/FetchedProject";
import FetchedRepo from "../../components/FetchedRepo";
import ContentfulCertificate from "../../components/ContentfulCertificate";
import AppDecorations from "../../components/AppDecorations";

// asset's file
import resumeFile from "../../assets/pdf/Huthaifa AlTiti-CV.pdf";

// styles, icon
import styles from "./styles.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Home() {
  const dispatch = useDispatch();

  // Contentful files
  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );
  const certificatesContentful =
    ContentfulProjects?.portfolioCertificateEntries;
  const certificatesContentfulByDate = certificatesContentful?.sort(
    (a, b) =>
      new Date(b.fields.certificateAccomplishedDate) -
      new Date(a.fields.certificateAccomplishedDate)
  );
  const portfolioResumeContentful = ContentfulProjects?.portfolioResumeEntry;

  // Vercel & Netlify files
  const { VercelProjects } = useSelector((state) => state.VercelReducer);
  const { NetlifyProjects } = useSelector((state) => state.NetlifyReducer);
  const VercelAndNetlifyProjects = [...VercelProjects, ...NetlifyProjects];

  // GitHub files
  const { GitHubRepos } = useSelector((state) => state.GitHubReducer);
  const GitHubReposByDate = GitHubRepos?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  useEffect(() => {
    // fetching projects
    dispatch(FetchVercelProjects());

    dispatch(FetchNetlifyProjects());

    dispatch(FetchGitHubRepos());

    dispatch(fetchContentfulProjects());
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Home decorations  */}
      <div className={styles.homeAppDecorationsCont}>
        {/* <AppDecorations /> */}
      </div>

      <div className={styles.homePageCont}>
        {/* Intro home contents */}
        <section>
          <div className={styles.homeIntro}>
            <div className={styles.rightCont}>
              <img
                src={require("../../assets/images/personal pic2.jpg")}
                alt="Personal pic for Huthaifa Altiti, the site owner"
              />
            </div>

            <div className={styles.leftCont}>
              <h1>Huthaifa Altiti</h1>

              <h3>A Front-End Developer & Design Enthusiast</h3>

              <a href={resumeFile} download>
                <span>
                  <AiOutlineCloudDownload className={styles.downloadIcon} />
                </span>

                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section>
          <div className={styles.projectsCont}>
            {/* Projects page header */}
            <div className={styles.projectsHeader}>
              <h2>Recent Projects</h2>
            </div>

            {/* Main projects */}
            <div className={styles.projectsContentsCont}>
              {VercelAndNetlifyProjects?.slice(0, 3).map((project, index) => (
                <FetchedProject key={index} project={project} />
              ))}
            </div>

            {/* Btn Container */}
            <div className={styles.btnCont}>
              <Link to="/projects">
                <button>More Projects</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Repos */}
        <section>
          <div className={styles.reposCont}>
            <div className={styles.reposHeader}>
              <h2>Recent Repositories</h2>
            </div>

            {/* Main repos */}
            <div className={styles.reposContentsCont}>
              {GitHubReposByDate?.slice(0, 3).map((repo, index) => (
                <FetchedRepo key={index} repo={repo} />
              ))}
            </div>

            {/* Btn Container */}
            <div className={styles.btnCont}>
              <Link to="/repos">
                <button>More Repositories</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Certificates */}
        <section>
          <div className={styles.certificatesCont}>
            <div className={styles.certificatesHeader}>
              <h2>Recent Certificates</h2>
            </div>

            <div className={styles.certificatesContentsCont}>
              {certificatesContentfulByDate
                ?.slice(0, 2)
                .map((certificate, index) => (
                  <div key={index} className={styles.certificatesCardsCont}>
                    <ContentfulCertificate certificate={certificate} />
                  </div>
                ))}
            </div>

            {/* Btn Container */}
            <div className={styles.btnCont}>
              <Link to="/certificates">
                <button>More Certificates</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
