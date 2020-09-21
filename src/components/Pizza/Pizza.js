import React, { Component } from "react";
import "./Pizza.css";
import Sauce from "../Sauce/Sauce";
import Cheese from "../Cheese/Cheese";
import Sausage from "../Sausage/Sausage";
import Pepperoni from "../Pepperoni/Pepperoni";
import Mushroom from "../Mushroom/Mushroom";
import BellPeppers from "../BellPeppers/BellPeppers";
import BuildControls from "../BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  sauce: 1.00,
  cheese: 1.50,
  meat: 0.75,
  veggie: 0.50
}

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sauce: "",
      cheese: false,
      pepperoni: false,
      mushroom: false,
      bellPeppers: false,
      sausage: false,
      price: 5.00
    };
  }

  clickEventHandler = (ingredient) => {
    if (ingredient === "red") {
      this.setState({
        sauce: "red",
      });
    } else if (ingredient === "white") {
      this.setState({
        sauce: "white",
      });
    } else if (ingredient === "pepperoni") {
      console.log("pepperoni");
      this.setState({
        pepperoni: !this.state.pepperoni,
      });
    } else if (ingredient === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom,
      });
    } else if (ingredient === "sausage") {
      this.setState({
        sausage: !this.state.sausage,
      });
    } else if (ingredient === "cheese") {
      this.setState({
        cheese: !this.state.cheese,
      });
    } else {
      this.setState({
        bellPeppers: !this.state.bellPeppers,
      });
    }
  };

  priceHandler = (amount) => {
    // console.log("price " + amount);
    // let total = this.state.price + amount;
    // this.setState({
    //   price: total
    // });
    // console.log("total " + this.state.price);
  }

  render() {
    const pepperoni = this.state.pepperoni && <Pepperoni />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const sausage = this.state.sausage && <Sausage />;
    const bellPeppers = this.state.bellPeppers && <BellPeppers />;
    const sauce = this.state.sauce && <Sauce type={this.state.sauce} />;
    const cheese = this.state.cheese && <Cheese />;
    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <h1>${this.state.price.toFixed(2)}</h1>
            <div className="pizza-base">
              {sauce}
              {cheese}
              {pepperoni}
              {mushroom}
              {sausage}
              {bellPeppers}
            </div>
          </div>
          <BuildControls eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Pizza;
