import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      pinCode: "",
    },
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Details</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="pinCode"
            placeholder="PIN Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
