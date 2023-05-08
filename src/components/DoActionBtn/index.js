// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function DoActionBtn({BtnTextContent}) {
  return (
    <div className={styles.DoActionBtnBody}>
      <button>{BtnTextContent}</button>
    </div>
  );
}
