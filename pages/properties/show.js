import React, { Component } from "react";
import HomeNav from "../../components/hometopnav";
import styles from "../../components/showproperty.module.css";
import PropertyImage from "../../public/images/propimage.jpg";
import { Button } from "@material-ui/core";
import Avatar from "../../public/images/user1colored.png";
import Performance from "../../components/performance";

export class PropertyShow extends Component {
  render() {
    return (
      <div>
        <HomeNav />
        <div className={styles.main}>
          <h3 className={styles.propname}>30b, Roving Heights</h3>
          <div className={styles.showcase}>
            <img src={PropertyImage} alt="" />
          </div>
          <div className={styles.propinfo}>
            <div className={styles.investmentinfo}>
            <h3>Investment Information</h3>
              <p>
                Equity Value: $250,000,00 <br/> 
                Number of shares: 400,000 <br/>
                Number of shares sold: 200,000 <br/>
                Available shares for investment: 200,000 <br />
                Share Price: $2,000
              </p>
            </div>
            <div className={styles.developerinfo}>
                 <img src={Avatar} alt="developer image" />
                <h3>Realington Realty</h3>
            </div>
          </div>
         <div className={styles.performance}>
             <h3>Performance </h3>
             <Performance />
         </div>       
          {/* Performance line chart */}
          {/* Earnings bar graph */}
          {/* List of investors */}
          <div className={styles.investors}>
             <h3>Performance </h3>
         </div> 
          <div className={styles.action__buttons}>
          <Button> Invest </Button>
          <Button> Rent </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default PropertyShow;
