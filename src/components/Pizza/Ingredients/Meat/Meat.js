import React from "react";
import Sausage from "./Sausage/Sausage";
import Pepperoni from "./Pepperoni/Pepperoni";

const meat = (props) => {
    //the array of meats ["pepperoni", "sausage"]
    let meatType = props.name;
    let pepperoni = null;
    let sausage = null;
    meatType.forEach(item => {
        if (item === "sausage") {
            sausage = <Sausage />
        } else if (item === "pepperoni") {
            pepperoni = <Pepperoni />
        }
    });

    return (
        <div>
            {pepperoni}
            {sausage}
        </div>
    );
}

export default meat;