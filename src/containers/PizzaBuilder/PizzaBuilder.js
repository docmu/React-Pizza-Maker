import React, { Component, Fragment } from "react";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    sauce: 1,
    cheese: 1.5,
    meat: 0.75,
    veggie: 0.5
}
class PizzaBuilder extends Component {
    state = {
        ingredients: {
            sauce: "",
            cheese: "",
            meat: [],
            veggie: []
        },
        totalPrice: 7
    }

    //meat and veggie must be arrays b/c we want to be able to add more than one type of meat or veggie
    //but we only want one type of cheese or sauce
    addIngredientHandler = (type, name) => {
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        if (type === "sauce" || type === "cheese") {
            updatedIngredients[type] = name;
        } else {
            // don't add the meat or veggie if it's already there
            if (updatedIngredients[type].includes(name)) {
                console.log("already added");
                return;
            }
            updatedIngredients[type].push(name);
        }
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type, name) => {
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        if (type === "sauce" || type === "cheese") {
            updatedIngredients[type] = "";
        } else {
            // don't remove from array if it's empty
            if (updatedIngredients[type] === undefined || updatedIngredients[type].length == 0) {
                return;
            }
            // find the name of the meat or veggie to remove 
            var temp = updatedIngredients[type];
            for (let i = 0; i < temp.length; i++) {
                if (temp[i] === name) {
                    temp.splice(i, 1);
                }
            }
        }
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            if (Array.isArray(disabledInfo[key])) {
                // disabledInfo[key] is either meat or veggie
                // set value to T or F
                disabledInfo[key] = disabledInfo[key].length === 0;
            } else {
                // disabledInfo[key] is either sauce or meat
                // set value to T or F
                disabledInfo[key] = disabledInfo[key] === "";
            }
        }
        return (
            <Fragment>
                <Pizza ingredients={this.state.ingredients} price={this.state.totalPrice} />
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler}
                // disabled={disabledInfo}
                />
            </Fragment>
        );
    }
}

export default PizzaBuilder;