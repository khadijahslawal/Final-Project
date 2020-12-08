import React, { Component } from "react";
import Header from "../../components/topnav";
import styles from "../../components/welcomesignup.module.css";
import displayImage from "../../public/images/ethwalk.png";
import { Link, Router } from "../../routes";

export class Welcome extends Component {
  state = {
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    Router.pushRoute(`/home`);
  };
  render() {
    return (
      <div>
        <Header />
        <div className={styles.index__section}>
          <div className={styles.container__left}>
            <h1 className = {styles.headermsg}>
              Great Jill,
              <br /> everything is <br /> ready
            </h1>
            <p className={styles.paragraphmsg}>You will recieve a confirmation shortly</p>
            <div className={styles.btnfullFld}>
              <button onClick={this.onSubmit}>Go to homepage</button>
            </div>
          </div>
          <div className={styles.container__right}>
            <img src={displayImage} className={styles.image} />
          </div>
        </div>
        {/* Text Welcome Info */}
        {/* Image Illustration */}
      </div>
    );
  }
}

export default Welcome;
