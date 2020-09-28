import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Red Sauce", type: "sauce", name: "red" },
    { label: "White Sauce", type: "sauce", name: "white" },
    { label: "Mozzarella Cheese", type: "cheese", name: "mozzarella" },
    { label: "Cheddar Cheese", type: "cheese", name: "cheddar" },
    { label: "Pepperoni", type: "meat", name: "pepperoni" },
    { label: "Mushroom", type: "veggie", name: "mushroom" },
    { label: "Bell Peppers", type: "veggie", name: "bellPeppers" },
    { label: "Sausage", type: "meat", name: "sausage" },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientsAdded(ctrl.type, ctrl.name)}
                removed={() => props.ingredientsRemoved(ctrl.type, ctrl.name)}
            // disabled={props.disabled[ctrl.type]}
            />
        ))}
        {/* <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            ORDER NOW
        </button> */}
    </div>
);

export default buildControls;