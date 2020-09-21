import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Red Sauce", type: "red" },
    { label: "White Sauce", type: "white" },
    { label: "Cheese", type: "cheese" },
    { label: "Pepperoni", type: "pepperoni" },
    { label: "Mushroom", type: "mushroom" },
    { label: "Bell Peppers", type: "bellPeppers" },
    { label: "Sausage", type: "sausage" },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                click={props.eventHandler}
            // added={() => props.ingredientsAdded(ctrl.type)}
            // removed={() => props.ingredientsRemoved(ctrl.type)}
            // disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            ORDER NOW
    </button>
    </div>
);

export default buildControls;