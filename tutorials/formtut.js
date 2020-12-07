import React, { Component } from "react";
import styles from "../../components/developersignup.module.css";
export class FormDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      topic: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.firstname} ${this.state.topic}`);
  };

  render() {
    const {firstname, topic} = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.progress_section}>
          <h1>Progress Section</h1>
        </div>
        <div className={styles.input_section}>
          <h1>Input Section</h1>
          <form onSubmit={this.onSubmit}>
            <label>First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(event) =>
                this.setState({ firstname: event.target.value })
              }
            />
            <div>
              <label>Options</label>
              <select
                value={topic}
                onChange={(event) =>
                  this.setState({ topic: event.target.value })
                }
              >
                <option>React</option>
                <option>Angular</option>
                <option>Vue</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormDev;
