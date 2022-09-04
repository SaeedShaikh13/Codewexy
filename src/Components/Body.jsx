import React from "react";
import styles from "../Styles/Global.module.css";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className={styles.Body}>
      <div className={styles.Card}>
        <Link to="/about">
          <button className={styles.Button}>About</button>
        </Link>
      </div>
      <div className={styles.Card}>
        <Link to="/H_T">
          <button className={styles.Button}>Head &#38; Tail</button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
