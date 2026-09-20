import { render } from "preact";
import Bubbles from "./Bubbles";
import Copyright from "./Copyright";
import CrazyText from "./CrazyText";
import "normalize.css";
import "../sass/all.scss";
import CircleText from "./CircleText";

const bubblesRootElem = document.getElementById("bubbles");

render(
    <Bubbles />,
    bubblesRootElem
);

const crazyTextRootElem = document.getElementById("crazy_text");

render(
    <CrazyText>Rich Court</CrazyText>,
    crazyTextRootElem
);

const circleTextElem = document.getElementById("circle_text");

render(
    <CircleText text="Creator of fine websites, apps and games, since 2009  •  " />,
    circleTextElem
);

const copyrightRootElem = document.getElementById("copyright");

render(
    <Copyright />,
    copyrightRootElem
);
