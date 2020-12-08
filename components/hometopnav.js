import React from "react";
import styles from "./hometopnav.module.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StoreIcon from '@material-ui/icons/Store';
import Link from "next/link";

function HomeNav() {
  return (
    <div className={styles.header}>
      <Link href="/home">
      <h1 className={styles.brandTitle}>Reats</h1>
      </Link>
      <div>
        <div className={styles.header__right}>
          <div className={styles.navcomponent}>
            <DashboardIcon className={styles.icon} fontSize="large"/>
            <p className={styles.navname}>Dashboard</p>
          </div>
          <div className={styles.navcomponent}>
            <TrendingUpIcon fontSize="large" />
            <p className={styles.navname}>Portfolio</p>
          </div>
          <div className={styles.navcomponent}>
            <StoreIcon fontSize="large"/>
            <p className={styles.navname}>Marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
