import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 30,
  meat: 60,
  bacon: 25,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 100,
    purchasable: false,
    purchasing: false, // to handle modal
    loading: false, // spinner
    error: false,
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((er) => {
        this.setState({ error: true });
      });
  }

  // new method to manage purchasable state
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients) // prolly Object.values().reduce is more elegant
      .map((igkey) => ingredients[igkey])
      .reduce((a, b) => a + b);

    // update state
    this.setState({ purchasable: sum > 0 });
  };

  // method to add ingredient
  addIngredientHandler = (type) => {
    // need to know old count
    const oldCount = this.state.ingredients[type];

    // new total
    const updatedCount = oldCount + 1;

    // new object to update state
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    // update price
    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice + priceAddition;

    // update state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  //method to remove ingredient
  removeIngredientHandler = (type) => {
    // need to know old count
    const oldCount = this.state.ingredients[type];

    // err handler
    if (oldCount <= 0) {
      return;
    }

    // new total
    const updatedCount = oldCount - 1;

    // new object to update state
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    // update price
    const priceDeduction = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice - priceDeduction;

    // update state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  // handler for order now button
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  // close backdrop and order summary
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // if we continue purchase
  purchaseContinueHandler = async () => {
    // alert("You continue!");
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Darshan Datta",
    //     address: {
    //       street: "Ward no 4",
    //       pinCode: "781325",
    //       country: "India",
    //     },
    //     email: "hello@firebaseui.com",
    //   },
    //   deliveryMethod: "Premium",
    // };
    // try {
    //   await axios.post("/orders.json", order);
    //   // console.log(res)
    // } catch (err) {
    //   // console.log(err)
    //   // this.setState({loading: false, purchasing: false})
    // }
    // this.setState({ loading: false, purchasing: false });
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burgerUI = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burgerUI = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}
          loading={this.state.loading}
        >
          {orderSummary}
        </Modal>
        {burgerUI}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
