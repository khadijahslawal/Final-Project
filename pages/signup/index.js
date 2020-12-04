import React, { Component } from "react";
import styles from "./signupindex.module.css";
import SplitPane, { Pane } from "react-split-pane";

export class index extends Component {
  render() {
    return (
     <div className={styles.index__section}>
        <div className={styles.sidenav}>
            <h1>Left</h1>
        </div>
        <div className={styles.main}>
            <h1>Right</h1>
        </div>
     </div>
    );
  }
}

export default index;
