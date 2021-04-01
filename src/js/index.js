import React from "react";
import ReactDOM from "react-dom";
import Bubbles from "./Bubbles";

import "../sass/all.scss";

const rootElem = document.getElementById("bubbles");

ReactDOM.render(
    <Bubbles/>,
    rootElem
);
