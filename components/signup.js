import React, { Component } from "react";
import style from "../components/signup.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import Logo from "../components/logo";
import SignupForm from "../components/signupform";

export class Signup extends Component {
  render() {
    return (
      <div className={style.signup_sections}>
        <div className={[style.split, style.left].join(" ")}>
          <div className={style.logo__container}>
            <Logo />
          </div>

          <div className={style.form__section}>
             <SignupForm />
          </div>
        </div>
        <div className={[style.split, style.right].join(" ")}>
          <div className={style.info__section}>
            <h3 className={style.info__section__header}>
              Blockchain Based <br /> Real Estate Investment
            </h3>
            <div className={style.features__section}>
              <List>
                <ListItem className={style.features__section__item}>
                  <CheckCircleOutlinedIcon
                    style={{ fill: "#78A6D6", width: "20px", height: "20px" }}
                  />
                  <p className={style.features__section__text}>
                    Fractional Ownership
                  </p>
                </ListItem>
                <ListItem className={style.features__section__item}>
                  <CheckCircleOutlinedIcon
                    style={{ fill: "#78A6D6", width: "20px", height: "20px" }}
                  />
                  <p className={style.features__section__text}>
                    Peer to Peer Marketplace
                  </p>
                </ListItem>
                <ListItem className={style.features__section__item}>
                  <CheckCircleOutlinedIcon
                    style={{ fill: "#78A6D6", width: "20px", height: "20px" }}
                  />
                  <p className={style.features__section__text}>
                    Highly Secured
                  </p>
                </ListItem>
                <ListItem className={style.features__section__item}>
                  <CheckCircleOutlinedIcon
                    style={{ fill: "#78A6D6", width: "20px", height: "20px" }}
                  />
                  <p className={style.features__section__text}>
                    Powered By Smart Contracts
                  </p>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
