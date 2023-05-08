// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// react-helmet
import { Helmet } from "react-helmet";

// assets files
import PersonalPic from "../../assets/images/personalPic.png";
import resumeFile from "../../assets/pdf/Huthaifa AlTiti-CV.pdf";

// styles, icons
import styles from "./styles.module.css";
import { AiOutlinePaperClip, AiOutlinePicture } from "react-icons/ai";

export default function AboutMe() {
  return (
    <div className={styles.aboutPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Titi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* about Container */}
      <div className={styles.aboutCont}>
        {/* Left Upper Container */}
        <div className={styles.leftCont}>
          <div className={styles.imgCont}>
            <img
              src={require("../../assets/images/personalPic.png")}
              alt="Huthaifa's Personal pic"
            />
          </div>
        </div>

        {/* Right Upper Container */}
        <div className={styles.rightCont}>
          <p>
            Hi, I'm Huthaifa Altiti, a front-end developer and design
            enthusiast, and a certified electrical engineer <span>by </span>
            <Link
              to="https://www.just.edu.jo/Pages/Default.aspx"
              target="_blank"
            >
              <span>JUST</span>
            </Link>
            . I have been working as a front-end developer for the past 1 year,
            mainly focused on web technologies and UI/UX design. <br />
            <br />I love programming, design, user interfaces, and open-source,
            and that's what I'm passionate about. Aside from work, I'm a big fan
            of football, tennis, and poetry, especially AlMutanabbi's poetry.
            <br />
            <br />
            Currently, I'm working on a few apps to be launched in the near
            future. In addition, I'm learning React.js deeply, Next.js, Node.js,
            MongoDB, SQL, MySQL, Python, and other programming languages to make
            cross-platform apps and blockchain development.
          </p>
        </div>
      </div>

      {/* Work and Career Container */}
      <div className={styles.careerCont}>
        <div className={styles.leftCareerCont}>
          <h1>Work & Career</h1>
        </div>

        <div className={styles.rightCareerCont}>
          {/* career sector 5 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Mar 2023 - Present</p>
            <h2>Front-End Developer</h2>
            <p>
              <Link
                to="https://www.estarta.com/Pages/default.aspx"
                target="_blank"
              >
                <span>Estarta </span>
              </Link>
              - Amman, Jordan
            </p>
          </div>

          {/* career sector 4 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Sep 2020 - Mar 2023</p>
            <h2>Content Moderator Advisor</h2>
            <p>
              <Link to="https://webhelp.com/" target="_blank">
                <span>Webhelp </span>
              </Link>
              - Amman, Jordan
            </p>
          </div>

          {/* career sector 3 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>April 2019 - April 2020</p>
            <h2>Electrical Site & Design Engineer</h2>
            <p>
              {/* <Link
                to="https://www.ideco.com.jo/portal/Webforms/Default.aspx"
                target="_blank"
              > */}
              <span>
                Maher & Mahmoud Altiti & Partners Co. for Contracting{" "}
              </span>
              {/* </Link> */}- Amman, Jordan
            </p>
          </div>

          {/* career sector 2 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Jan 2019 - April 2019</p>
            <h2>Electrical Power Engineer Trainee</h2>
            <p>
              <Link
                to="https://www.ideco.com.jo/portal/Webforms/Default.aspx"
                target="_blank"
              >
                <span>IDECO</span>
              </Link>{" "}
              - Irbid, Jordan
            </p>
          </div>

          {/* career sector 1 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Jan 2016 - Jan 2019</p>
            <h2>Academic Officer & Team Leader</h2>
            <p>
              <Link to="https://medialajna.wixsite.com/just" target="_blank">
                <span>EEC</span>
              </Link>{" "}
              - Irbid, Jordan
            </p>
          </div>
        </div>
      </div>

      <div className={styles.downloadCont}>
        <div className={styles.downloadLeftCont}>
          &nbsp;
          {/* <h2>Assets</h2> */}
        </div>

        <div className={styles.downloadRightCont}>
          <a href={resumeFile} download>
            <AiOutlinePaperClip />
            Download CV
          </a>

          <a href={PersonalPic} download="Personal Image">
            <AiOutlinePicture />
            Download Profile Pic
          </a>
        </div>
      </div>
    </div>
  );
}
