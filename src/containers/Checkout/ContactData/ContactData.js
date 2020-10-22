import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      pinCode: "",
    },
    loading: false,
  };

  orderHandler = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Darshan Datta",
        address: {
          street: "Ward no 4",
          pinCode: "781325",
          country: "India",
        },
        email: "hello@firebaseui.com",
      },
      deliveryMethod: "Premium",
    };
    try {
      await axios.post("/orders.json", order);
      // console.log(res)
      this.props.history.replace("/");
    } catch (err) {
      // console.log(err)
      // this.setState({loading: false, purchasing: false})
      this.setState({ loading: false });
    }
  };

  render() {
    let form = (
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
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Details</h4>
        {form}
      </div>
    );
  }
}
