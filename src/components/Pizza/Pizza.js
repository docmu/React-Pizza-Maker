import React, { Component, Fragment } from "react";
import "./Pizza.css";
import Ingredients from "./Ingredients/Ingredients";


const pizza = (props) => {
  //TURNS INGREDIENIENTS OBJECT IN THE STATE IN PIZZABUILDER TO AN ARRAY THAT CAN BE ITERATED OVER
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      //j= red, mozzarella...    i= indexNum    igKey= sauce, cheese,...
      return [...Array(props.ingredients[igKey])].map((j, i) => {
        return <Ingredients key={j + igKey} type={igKey} name={j} />
      });
    });
  console.log(transformedIngredients);

  return (
    <Fragment>
      <h1>${props.price.toFixed(2)}</h1>
      <div className="pizza-base">
        {transformedIngredients}
      </div>
    </Fragment>

  );
}

export default pizza;
