import React, { Component, useState } from "react";
import SideNav from "../../components/sidenav";
import styles from "../../components/othersignup.module.css";
import { Link, Router } from "../../routes";

export class SignupOther extends Component {
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
            <div className={styles.user__info}>
              <h1>Fill in the following information</h1>
              <div className={styles.user__input}>
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
                <button type="submit" loading={this.state.loading}>
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupOther;
