import React from "react";
import styles from "./homemidnav.module.css";

function HomeNav() {
  return (
        <div className={styles.header__left}>
           <h3>Investments</h3>
           <h3>Rentals</h3>
        </div>
  );
}

export default HomeNav;
