import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      pinCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "PIN Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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

  inputChangedHandler = (event, inputIdentifier) => {
    // copy whole object
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    // copy object
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

    // now can safely update value
    updatedFormElement.value = event.target.value;

    // update copied obj
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form>
        {formElementsArray.map((el) => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            changed={(e) => this.inputChangedHandler(e, el.id)}
          />
        ))}
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
