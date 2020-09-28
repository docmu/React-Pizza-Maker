import React, { Fragment } from "react";
import classes from "./Layout.module.css";
//The general layout of the App
const layout = (props) => (
    <Fragment>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;