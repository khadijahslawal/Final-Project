import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useForm, Form } from "../components/useForm";
import styles from "../components/signup.module.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  ethaddress: "",
  password: "",
  acceptTerms: false,
};
function signupform() {
  const [values, setValues] = useState(initialValues);

  return (
    <form className={styles.form}>
      <div className={styles.firstRow}>
        <input
          type="text"
          placeholder="First Name"
          className={styles.textFld}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={[styles.textFld, styles.right__field].join(" ")}
        />
      </div>
      <div className={styles.secondRow}>
        <input
          type="text"
          placeholder="Email Address"
          className={styles.fullFld}
        />
      </div>
      <div className={styles.thirdRow}>
        <input
          type="text"
          placeholder="Ethereum Address"
          className={styles.fullFld}
        />
      </div>
      <div className={styles.secondRow}>
        <input type="text" placeholder="Password " className={styles.fullFld} />
      </div>

      <div className={styles.secondRow}>
        <p className={styles.warning}>
          Destroy the blinds chase dog then run away, mouse yet human clearly
          uses close to one life a night no one naps
        </p>
      </div>
    </form>
  );
}

export default signupform;
