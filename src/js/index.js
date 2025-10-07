import React from "react";
import ReactDOM from "react-dom";
import Bubbles from "./Bubbles";
import Copyright from "./Copyright";
import CrazyText from "./CrazyText";

import './lazy-images';

import "../index.html";

import "../sass/all.scss";

const bubblesRootElem = document.getElementById("bubbles");

ReactDOM.render(
    <Bubbles/>,
    bubblesRootElem
);

const crazyTextRootElem = document.getElementById("crazy_text");

ReactDOM.render(
    <CrazyText subtitle="Developer">Rich Court</CrazyText>,
    crazyTextRootElem
);

const copyrightRootElem = document.getElementById("copyright");

ReactDOM.render(
    <Copyright/>,
    copyrightRootElem
);