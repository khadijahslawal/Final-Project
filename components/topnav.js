import React from 'react';
import styles from "./topnav.module.css";

function Nav() {
    return (
        <div className={styles.header}>
            <h1 className={styles.brandTitle}>Reats</h1>
            <p className={styles.help}>Having trouble? <span className={styles.helpspan}>get help</span></p>
        </div>
    )
}

export default Nav
