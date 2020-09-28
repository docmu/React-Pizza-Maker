import React from "react";
import Mushroom from "./Mushroom/Mushroom";
import BellPeppers from "./BellPeppers/BellPeppers";

const veggie = (props) => {
    //the array of veggies ["mushroom", "bellPeppers"]
    let veggieType = props.name;
    let mushroom = null;
    let bellPeppers = null;
    veggieType.forEach(item => {
        if (item === "mushroom") {
            mushroom = <Mushroom />
        } else if (item === "bellPeppers") {
            bellPeppers = <BellPeppers />
        }
    });

    return (
        <div>
            {mushroom}
            {bellPeppers}
        </div>
    );
}

export default veggie;