// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";

export default function AppDecorations() {
  const { colorMode } = useSelector((state) => state.VercelReducer);

  return (
    <div class={styles.decorationsBody}>
      <div className={styles.decorationsDotsCont}>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
        <div class={styles.particle}></div>
      </div>

      <div class={styles.bubbles}>
        <div class={`${styles.glinda} ${styles.x}`}>
          <div class={`${styles.glinda} ${styles.y}`}>
            {colorMode === "dark" ? (
              <img
                src={require("../../assets/images/H Logo-wh.png")}
                alt="Moveable image"
                class={styles.moveableImg}
              />
            ) : (
              <img
                src={require("../../assets/images/H Logo-dark.png")}
                alt="Moveable image"
                class={styles.moveableImg}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
