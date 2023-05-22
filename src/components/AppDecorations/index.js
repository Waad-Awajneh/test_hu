// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";

export default function AppDecorations() {
  const { colorMode } = useSelector((state) => state.VercelReducer);

  const particlesCount = 30;

  return (
    <div className={styles.decorationsBody}>
      <div className={styles.decorationsDotsCont}>
        {Array.from({ length: particlesCount }).map((_, index) => (
          <div key={index} className={styles.particle} />
        ))}
      </div>

      <div className={styles.bubbles}>
        <div className={`${styles.glinda} ${styles.x}`}>
          <div className={`${styles.glinda} ${styles.y}`}>
            {colorMode === "dark" ? (
              <img
                src={require("../../assets/images/H Logo-wh.png")}
                alt="Moveable image"
                className={styles.moveableImg}
              />
            ) : (
              <img
                src={require("../../assets/images/H Logo-dark.png")}
                alt="Moveable image"
                className={styles.moveableImg}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
