import React, { Component } from "react";
import Sauce from "./Sauce/Sauce";
import Cheese from "./Cheese/Cheese";
import Meat from "./Meat/Meat";
import Veggie from "./Veggie/Veggie";
import PropTypes from "prop-types";

class Ingredients extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case "sauce":
                ingredient = <Sauce name={this.props.name} />
                break;
            case "cheese":
                ingredient = <Cheese name={this.props.name} />
                break;
            case "meat":
                ingredient = <Meat name={this.props.name} />
                break;
            case "veggie":
                ingredient = <Veggie name={this.props.name} />
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}

//ensures that ingredient is a string 
//and if we ever try to use this component w/o an ingredient prop => error
Ingredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredients;