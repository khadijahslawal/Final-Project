import React from "react";
import styles from "./hometopnav.module.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DashboardIcon from "@material-ui/icons/Dashboard";

function HomeNav() {
  return (
    <div className={styles.header}>
      <h1 className={styles.brandTitle}>Reats</h1>

      <div>
        <div className={styles.header__right}>
          <div className={styles.navcomponent}>
            <TrendingUpIcon fontSize="large" />
            <p className={styles.navname}>Discover</p>
          </div>
          <div className={styles.navcomponent}>
            <DashboardIcon fontSize="large"/>
            <p className={styles.navname}>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
