import React from "react";
import styles from "./card.module.css";
import ethlogo from "../public/images/ethereumiconcolor.png";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

//our card will take props; title, price, percentage sold,location, image source
// function Card({ src, title, description, price, percentsold }) {
function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img src={ethlogo} />
      </div>
      <div className={styles.ticker}>
        <h3>RVH</h3>
      </div>
      <div className={styles.metrics}>
        <p>$120</p>
        <p>+1.50 increase</p>
      </div>
    </div>
  );
}

export default Card;
