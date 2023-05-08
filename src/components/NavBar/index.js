// react
import React, { useState, useEffect } from "react";
// react-redux
import { useDispatch } from "react-redux";
// react-router-dom
import { NavLink, Link } from "react-router-dom";

// components
import HireMeModal from "../HireMeModal";
import DoActionBtn from "../DoActionBtn/index";
import AppDecorations from "../AppDecorations";

// function Creators
import { ColorMode } from "../../redux/Reducers/VercelReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { BsSun, BsMic } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineCloseFullscreen, MdOutlineArticle } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoIosGitNetwork } from "react-icons/io";
import { AiOutlineSetting, AiOutlineOrderedList } from "react-icons/ai";

const LIGHT_MODE = {
  text: "#1a1a1a",
  "text-sub-color-1": "#3F3F46",
  "text-sub-color-2": "#A3A3A3",

  "background-color": "#fff",
  "background-sub-color-1": "#f2f2f2",
  "background-sub-color-2": "#E4E4E7",
  "background-sub-color-3": "#d9d9d9",

  "border-color": "#f2f2f2",
  "border-sub-color-1": "#E4E4E7",
  "border-sub-color-2": "#d9d9d9",
};

const DARK_MODE = {
  text: "#fff",
  "text-sub-color-1": "#f2f2f2",
  "text-sub-color-2": "#d9d9d9",

  "background-color": "#1a1a1a",
  "background-sub-color-1": "#27272A",
  "background-sub-color-2": "#3F3F46",
  "background-sub-color-3": "#A3A3A3",

  "border-color": "#27272A",
  "border-sub-color-1": "#3F3F46",
  "border-sub-color-2": "#A3A3A3",
};

export default function NavBar() {
  const dispatch = useDispatch();

  const [colorMode, setColorMode] = useState("dark");
  const [showModal, setShowModal] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  // to render dark-light mode on the site by clicking
  function toggleColorMode() {
    const root = document.documentElement;
    if (colorMode === "light") {
      // text colors
      setColorMode("dark");
      root.style.setProperty("--text-color", DARK_MODE.text);
      root.style.setProperty(
        "--text-sub-color-1",
        DARK_MODE["text-sub-color-1"]
      );
      root.style.setProperty(
        "--text-sub-color-2",
        DARK_MODE["text-sub-color-2"]
      );

      // background colors
      root.style.setProperty(
        "--background-color",
        DARK_MODE["background-color"]
      );
      root.style.setProperty(
        "--background-sub-color-1",
        DARK_MODE["background-sub-color-1"]
      );
      root.style.setProperty(
        "--background-sub-color-2",
        DARK_MODE["background-sub-color-2"]
      );

      // border colors
      root.style.setProperty("--border-color", DARK_MODE["border-color"]);
      root.style.setProperty(
        "--border-sub-color-1",
        DARK_MODE["border-sub-color-1"]
      );
      root.style.setProperty(
        "--border-sub-color-2",
        DARK_MODE["border-sub-color-2"]
      );
    } else {
      setColorMode("light");

      // text colors
      root.style.setProperty("--text-color", LIGHT_MODE.text);
      root.style.setProperty(
        "--text-sub-color-1",
        LIGHT_MODE["text-sub-color-1"]
      );
      root.style.setProperty(
        "--text-sub-color-2",
        LIGHT_MODE["text-sub-color-2"]
      );

      // background colors
      root.style.setProperty(
        "--background-color",
        LIGHT_MODE["background-color"]
      );
      root.style.setProperty(
        "--background-sub-color-1",
        LIGHT_MODE["background-sub-color-1"]
      );
      root.style.setProperty(
        "--background-sub-color-2",
        LIGHT_MODE["background-sub-color-2"]
      );

      // border colors
      root.style.setProperty("--border-color", LIGHT_MODE["border-color"]);
      root.style.setProperty(
        "--border-sub-color-1",
        LIGHT_MODE["border-sub-color-1"]
      );
      root.style.setProperty(
        "--border-sub-color-2",
        LIGHT_MODE["border-sub-color-2"]
      );
    }
  }

  // For modal, closing & opining
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // to render dark mode directly on the site
  useEffect(() => {
    if (colorMode === "dark") {
      // text colors
      document.documentElement.style.setProperty(
        "--text-color",
        DARK_MODE.text
      );
      document.documentElement.style.setProperty(
        "--text-sub-color-1",
        DARK_MODE["text-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--text-sub-color-2",
        DARK_MODE["text-sub-color-2"]
      );

      // background colors
      document.documentElement.style.setProperty(
        "--background-color",
        DARK_MODE["background-color"]
      );
      document.documentElement.style.setProperty(
        "--background-sub-color-1",
        DARK_MODE["background-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--background-sub-color-2",
        DARK_MODE["background-sub-color-2"]
      );

      // border colors
      document.documentElement.style.setProperty(
        "--border-color",
        DARK_MODE["border-color"]
      );
      document.documentElement.style.setProperty(
        "--border-sub-color-1",
        DARK_MODE["border-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--border-sub-color-2",
        DARK_MODE["border-sub-color-2"]
      );
    } else {
      // text colors
      document.documentElement.style.setProperty(
        "--text-color",
        LIGHT_MODE.text
      );
      document.documentElement.style.setProperty(
        "--text-sub-color-1",
        LIGHT_MODE["text-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--text-sub-color-2",
        LIGHT_MODE["text-sub-color-2"]
      );

      // background colors
      document.documentElement.style.setProperty(
        "--background-color",
        LIGHT_MODE["background-color"]
      );
      document.documentElement.style.setProperty(
        "--background-sub-color-1",
        LIGHT_MODE["background-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--background-sub-color-2",
        LIGHT_MODE["background-sub-color-2"]
      );

      // border colors
      document.documentElement.style.setProperty(
        "--border-color",
        LIGHT_MODE["border-color"]
      );
      document.documentElement.style.setProperty(
        "--border-sub-color-1",
        LIGHT_MODE["border-sub-color-1"]
      );
      document.documentElement.style.setProperty(
        "--border-sub-color-2",
        LIGHT_MODE["border-sub-color-2"]
      );
    }

    // send color mode
    dispatch(ColorMode(colorMode));
  }, [colorMode]);

  return (
    <>
      <div className={styles.navBarBody}>
        {/* Home decorations  */}
        {/* <div className={styles.navBarAppDecorationsCont}>
          <AppDecorations />
        </div> 
        */}

        {/* Form modal */}
        <HireMeModal
          colorMode={colorMode}
          show={showModal}
          handleClose={handleCloseModal}
        />

        {/* Logo */}
        <div className={styles.logoCont}>
          <Link to="/">
            <span>H</span>
          </Link>
        </div>

        {/* Links */}
        <div className={styles.linksCont}>
          <NavLink className={styles.navLink} to="/about">
            About
          </NavLink>

          <NavLink className={styles.navLink} to="/articles">
            Articles
          </NavLink>

          <NavLink className={styles.navLink} to="/contact">
            Contact
          </NavLink>

          <NavLink className={styles.navLink} to="/projects">
            Projects
          </NavLink>

          <NavLink className={styles.navLink} to="/repos">
            Repos
          </NavLink>

          <NavLink className={styles.navLink} to="/uses">
            Uses
          </NavLink>
        </div>

        {/* Do action */}
        <div className={styles.doActionCont}>
          <span onClick={handleShowModal}>
            <DoActionBtn BtnTextContent={"Hire Me"} />
          </span>

          <span
            className={styles.toggleColorModeCont}
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? (
              <BsSun className={styles.toggleColorModeIconLight} />
            ) : (
              <HiOutlineMoon className={styles.toggleColorModeIconDark} />
            )}
          </span>

          {/* Menu icon container */}
          <span className={styles.menuIconCont}>
            {!showMenuContent && (
              <CgMenuRightAlt
                onClick={() => setShowMenuContent(!showMenuContent)}
                className={styles.menuIcon}
              />
            )}

            {showMenuContent && (
              <MdOutlineCloseFullscreen
                onClick={() => setShowMenuContent(!showMenuContent)}
                className={styles.menuIcon}
              />
            )}
          </span>
        </div>
      </div>

      {showMenuContent && (
        <div className={styles.menuContent}>
          <div className={styles.menuContentCont}>
            <span>
              <NavLink className={styles.navLink} to="/about">
                <FiUser className={styles.menuNavIcon} />
                About
              </NavLink>
            </span>

            <span>
              <NavLink className={styles.navLink} to="/articles">
                <MdOutlineArticle className={styles.menuNavIcon} />
                Articles
              </NavLink>
            </span>

            <span>
              <NavLink className={styles.navLink} to="/contact">
                <BsMic className={styles.menuNavIcon} />
                Contact
              </NavLink>
            </span>

            <span>
              <NavLink className={styles.navLink} to="/projects">
                <AiOutlineOrderedList className={styles.menuNavIcon} />
                Projects
              </NavLink>
            </span>

            <span>
              <NavLink className={styles.navLink} to="/repos">
                <IoIosGitNetwork className={styles.menuNavIcon} />
                Repos
              </NavLink>
            </span>

            <span>
              <NavLink className={styles.navLink} to="/uses">
                <AiOutlineSetting className={styles.menuNavIcon} />
                Uses
              </NavLink>
            </span>

            {/* Hire me btn */}
            <span onClick={handleShowModal}>
              <DoActionBtn BtnTextContent={"Hire Me"} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
