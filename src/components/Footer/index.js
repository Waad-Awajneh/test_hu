// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link } from "react-router-dom";

// styles, icons
import styles from "./styles.module.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";

export default function Footer() {
  const { colorMode } = useSelector((state) => state.VercelReducer);

  return (
    <div className={styles.footerBody}>
      <div className={styles.footerCont}>
        {/* Huthaifa's logo */}
        <div className={styles.footerLogoCont}>
          {colorMode === "dark" ? (
            <img
              src={require("../../assets/images/H Logo-wh.png")}
              alt="Website's personal logo"
            />
          ) : (
            <img
              src={require("../../assets/images/H Logo-dark.png")}
              alt="Website's personal logo"
            />
          )}
        </div>

        {/* Following container */}
        <div className={styles.followingDetails}>
          <div className={styles.footerIconsCont}>
            {/* GitHub */}
            <span className={styles.footerIconCont}>
              <Link target="_blank" to="https://github.com/huthaifaaltiti">
                <AiFillGithub className={styles.footerIcon} />
              </Link>
            </span>

            {/* Twitter */}
            <span className={styles.footerIconCont}>
              <Link target="_blank" to="https://twitter.com/huthaifaaltiti">
                <AiOutlineTwitter className={styles.footerIcon} />
              </Link>
            </span>

            {/* Instagram */}
            <span className={styles.footerIconCont}>
              <Link
                target="_blank"
                to="https://www.instagram.com/huthaifa.titi/"
              >
                <AiFillInstagram className={styles.footerIcon} />
              </Link>
            </span>

            {/* Behance */}
            <span className={styles.footerIconCont}>
              <Link target="_blank" to="https://www.behance.net/huthaifaaltiti">
                <AiFillBehanceSquare className={styles.footerIcon} />
              </Link>
            </span>

            {/* LinkedIn */}
            <span className={styles.footerIconCont}>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/huthaifaaltiti"
              >
                <AiFillLinkedin className={styles.footerIcon} />
              </Link>
            </span>

            {/* Blogger */}
            <span className={styles.footerIconCont}>
              <Link target="_blank" to="https://huthaifaaltiti.blogspot.com/">
                <FaBloggerB className={styles.footerIcon} />
              </Link>
            </span>

            {/* Youtube */}
            <span className={styles.footerIconCont}>
              <Link
                target="_blank"
                to="https://www.youtube.com/@HuthaifaAltiti"
              >
                <AiFillYoutube className={styles.footerIcon} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
