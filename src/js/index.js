import React from "react";
import ReactDOM from "react-dom";
import Bubbles from "./Bubbles";
import Copyright from "./Copyright";
import CrazyText from "./CrazyText";

import './lazy-images';

import "../index.html";

import "../sass/all.scss";
import CircleText from "./CircleText";

const bubblesRootElem = document.getElementById("bubbles");

ReactDOM.render(
    <Bubbles />,
    bubblesRootElem
);

const crazyTextRootElem = document.getElementById("crazy_text");

ReactDOM.render(
    <CrazyText>Rich Court</CrazyText>,
    crazyTextRootElem
);

const circleTextElem = document.getElementById("circle_text");

ReactDOM.render(
    <CircleText text="Creator of fine websites, apps and games, since 2009  •  " />,
    circleTextElem
);

const copyrightRootElem = document.getElementById("copyright");

ReactDOM.render(
    <Copyright />,
    copyrightRootElem
);