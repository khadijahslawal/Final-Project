import React, { Component } from "react";
import styles from "./signupindex.module.css";
import displayImage from "../../public/images/walkicon.png";
import investorIcon from "../../public/images/leasing.png";
import developerIcon from "../../public/images/tenant.png";

export class SignUpIndex extends Component {
  render() {
    return (
      <div className={styles.index__section}>
        <div className={styles.sidenav}>
          <div className={styles.container_left}>
            <p className={styles.headerName}>Reats</p>
            <p className={styles.headerCallOut}>
              A few clicks away from being part of an innovative platform
            </p>
            <p className={styles.headerjoinmsg}>
              Join as a developer <br /> investor <br /> tenant
            </p>
            <div className={styles.headerImage}>
              <img src={displayImage} />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.container_right}>
            <p className={styles.continue}>Continue as</p>
            <div className={styles.developer}>
              <img src={developerIcon} className={styles.developerImage} />
              <div className={styles.ownerFeatures}>
                <h3>Property Owner</h3>
                <p>
                  Digital asset tokenization <br />
                  Fast document verification system
                  <br />
                  Copyright management for property images <br />
                  Reliable proper valuation <br />
                  Property analytics
                </p>
              </div>
            </div>

            <div className={styles.investor}>
              <img src={investorIcon} className={styles.developerImage} />
              <div className={styles.investorFeatures}>
              <h3>Investor or Tenant</h3>
                <p>
                  Fractional ownership <br />
                  Peer to peer marketplace <br />
                  Investment Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpIndex;
