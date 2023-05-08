// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// component
import DoActionBtn from "../../components/DoActionBtn/index";

// lottiefiles GIF
import { Player } from "@lottiefiles/react-lottie-player";
import notfoundData from "../../assets/gifs/125075-page-not-found.json";

// styles, icon
import styles from "./styles.module.css";
// import { RxDashboard } from "react-icons/rx";

export default function NotFound() {
  const notFoundedGIFData = {
    animationData: notfoundData,
  };

  return (
    <div className={styles.notFoundPage}>
      <Player
        className={styles.player}
        autoplay
        loop
        src={notFoundedGIFData.animationData}
      ></Player>

      <div className={styles.doAnActionCont}>
        <Link to="/">
          <p>
            {/* <span>
              <RxDashboard className={styles.doAnActionIcon} />
            </span> */}

            <span>
              <DoActionBtn BtnTextContent={"Back Home"} />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
