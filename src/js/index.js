import React from "react";
import ReactDOM from "react-dom";
import Bubbles from "./Bubbles";

import "../sass/all.scss";
import CrazyText from "./CrazyText";

const bubblesRootElem = document.getElementById("bubbles");

ReactDOM.render(
    <Bubbles/>,
    bubblesRootElem
);

const crazyTextRootElem = document.getElementById("crazy_text");

ReactDOM.render(
    <CrazyText subtitle="Web Developer">Rich Court</CrazyText>,
    crazyTextRootElem
);
