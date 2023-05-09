// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// assets files
import PersonalPic from "../../assets/images/personalPic.png";
import resumeFile from "../../assets/pdf/Huthaifa AlTiti-CV.pdf";

// styles, icons
import styles from "./styles.module.css";
import { AiOutlinePaperClip, AiOutlinePicture } from "react-icons/ai";

export default function AboutMe() {
  // Contentful files
  const { ContentfulProjects } = useSelector(
    (state) => state.ContentfulReducer
  );

  const portfolioResumeContentful = ContentfulProjects?.portfolioResumeEntry;

  return (
    <div className={styles.aboutPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Who is Titi?</title>
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
            Hi, I am Huthaifa Altiti, a certified electrical engineer
            <span> by </span>
            <Link
              to="https://www.just.edu.jo/Pages/Default.aspx"
              target="_blank"
            >
              <span>JUST </span>
            </Link>
            and a front-end developer and design enthusiast. Over the past year,
            I have gained extensive experience in front-end development,
            primarily in web technologies and UI/UX design. . I have been
            working as a front-end developer for the past year, mainly focused
            on web technologies and UI/UX design.
            <br />
            <br />
            My passion for programming, design, user interfaces, and open-source
            has driven my work as a front-end developer. Alongside my
            professional endeavors, I enjoy indulging in my hobbies, which
            include a fondness for football, tennis, and poetry, particularly
            the works of AlMutanabbi.
            <br />
            <br />
            Currently, I am working on several apps set to be launched soon,
            while also dedicating my time to in-depth learning of React.js,
            Next.js, Node.js, MongoDB, SQL, MySQL, Python, and other programming
            languages. My goal is to utilize this knowledge to develop
            cross-platform apps and delve into blockchain development.
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
            <p>Mar, 2023 - Present</p>
            <h2>Front-End Developer</h2>
            <p>
              <Link
                to="https://www.estarta.com/Pages/default.aspx"
                target="_blank"
              >
                <span>Estarta</span>
              </Link>
              - Amman, Jordan
            </p>
          </div>

          {/* career sector 4 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Sep, 2020 - Mar, 2023</p>
            <h2>Content Moderator Advisor</h2>
            <p>
              <Link to="https://webhelp.com/" target="_blank">
                <span>Webhelp</span>
              </Link>
              - Amman, Jordan
            </p>
          </div>

          {/* career sector 3 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>April, 2019 - April, 2020</p>
            <h2>Electrical Site & Design Engineer</h2>
            <p>
              <span>Maher & Mahmoud Altiti & Partners Co. for Contracting</span>
              - Amman, Jordan
            </p>
          </div>

          {/* career sector 2 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Jan, 2019 - April, 2019</p>
            <h2>Electrical Power Engineer</h2>
            <p>
              <Link
                to="https://www.ideco.com.jo/portal/Webforms/Default.aspx"
                target="_blank"
              >
                <span>IDECO</span>
              </Link>
              - Irbid, Jordan
            </p>
          </div>

          {/* career sector 1 */}
          <div className={styles.careerSector}>
            <span className={styles.dot}></span>
            <p>Jan, 2016 - Jan, 2019</p>
            <h2>Academic Officer & Team Leader</h2>
            <p>
              <Link to="https://medialajna.wixsite.com/just" target="_blank">
                <span>EEC</span>
              </Link>
              - Irbid, Jordan
            </p>
          </div>
        </div>
      </div>

      <div className={styles.downloadCont}>
        <div className={styles.downloadLeftCont}>&nbsp;</div>

        <div className={styles.downloadRightCont}>
          <a
            href={
              portfolioResumeContentful[0]?.fields.resumeDocumentFile.fields
                .file.url || resumeFile
            }
            download
          >
            <AiOutlinePaperClip />
            Download CV
          </a>

          <a href={PersonalPic} download="Huthaifa's Personal Image">
            <AiOutlinePicture />
            Download Profile Pic
          </a>
        </div>
      </div>
    </div>
  );
}
