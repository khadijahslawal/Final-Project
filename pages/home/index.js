import React, { Component } from "react";
import factory from "../../ethereum/factory";
import HomeNav from "../../components/hometopnav";
import Banner from "../../components/banner";
import { Button } from "@material-ui/core";
import MidNav from "../../components/homemidnav";
import styles from "../../components/home.module.css";
import Card from "../../components/card";
import { Link, Router } from "../../routes";

export class HomeIndex extends Component {
  static async getInitialProps() {
    const properties = await factory.methods.getDeployedProperties().call();
    return { properties };
  }

  state = {
    loading: false,
  };

  expandProperty = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    Router.pushRoute(`/properties/address`);
  };


  render() {
    return (
      <div>
        <HomeNav />
        <Banner />

        <div className={styles.action__buttons}>
          <Button variant="outlined"> Add Property </Button>
          <Button variant="outlined"> Invest </Button>
          <Button variant="outlined"> Rent </Button>
        </div>
        <div className={styles.main}>
          <h1>Tokens</h1>
          <div className={styles.home_section}>
            <Card className={styles.card}  />
            <Card className={styles.card}  />
            <Card />
            <Card />
          </div>
          <button onClick={this.expandProperty}>View All Properties</button>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
