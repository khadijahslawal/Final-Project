import React, { Component } from "react";
import "react-step-progress/dist/index.css";
import styles from "../../components/developersignup.module.css";
import SideNav from "../../components/sidenav";
import { Link, Router } from "../../routes";

export class developerSignUp extends Component {
  state = {
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    Router.pushRoute(`/welcome`);
  };
  render() {
    return (
      <div className={styles.main}>
        <SideNav />
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.form__section}>
            <div className={styles.business__info}>
              <h1>Business Details</h1>
              <div className={styles.firstRow}>
                <input
                  type="text"
                  placeholder="Company Name"
                  className={styles.textFld}
                />
                <input
                  type="text"
                  placeholder="Company Registration No."
                  className={styles.right__field}
                />
              </div>
              <div className={styles.secondRow}>
                <input
                  type="text"
                  placeholder="Country"
                  className={styles.textFld}
                />
                <input
                  type="text"
                  placeholder="State"
                  className={styles.right__field}
                />
                <input
                  type="text"
                  placeholder="City"
                  className={styles.right__field}
                />
              </div>
            </div>
            <div className={styles.developer__info}>
              <h1>Developer Information</h1>
              <div className={styles.developer__input}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={styles.textFld}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={styles.textFld}
                />

                <input
                  type="text"
                  placeholder="Email Address"
                  className={styles.textFld}
                />

                <input
                  type="text"
                  placeholder="Ethereum Address"
                  className={styles.textFld}
                />
              </div>
            </div>
            <div>
              <a className={styles.btnfullFld}>
                <button>Sign Up</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default developerSignUp;
