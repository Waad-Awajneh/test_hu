// react
import React from "react";
// react-redux
import { useSelector } from "react-redux";

// react-spinners
import BarLoader from "react-spinners/BarLoader";

// styles
import styles from "./styles.module.css";

export default function Spinner() {
  const { colorMode } = useSelector((state) => state.VercelReducer);

  return (
    <div className={styles.spinnerContainer}>
      <BarLoader
        color={`${colorMode === "dark" ? "#ffffff" : "#1a1a1a"}`}
        className={styles.spinner}
      />
    </div>
  );
}
