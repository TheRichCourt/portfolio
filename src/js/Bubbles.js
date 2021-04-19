import React from "react";
import Bubble from "./Bubble";

import "../sass/bubbles.scss";

import JoomlaLogo from "../images/skill-logos/joomla.svg";
import UnityLogo from "../images/skill-logos/unity.svg";
import SASSLogo from "../images/skill-logos/sass.svg";
import ReduxLogo from "../images/skill-logos/redux.svg";
import ReactLogo from "../images/skill-logos/react.svg";
import SymfonyLogo from "../images/skill-logos/symfony.svg";
import MySQLLogo from "../images/skill-logos/mysql.svg";
import PHPLogo from "../images/skill-logos/php.svg";
import JavaScriptLogo from "../images/skill-logos/js.svg";
import CSSLogo from "../images/skill-logos/css3.svg";
import HTMLLogo from "../images/skill-logos/html5.svg";

const Bubbles = () => {
    return (
        <div className="bubbles-container">
            <Bubble name="Joomla" src={JoomlaLogo}/>
            <Bubble name="Unity" src={UnityLogo}/>
            <Bubble name="SASS" src={SASSLogo}/>
            <Bubble name="Redux" src={ReduxLogo}/>
            <Bubble name="React" src={ReactLogo}/>
            <Bubble name="Symfony" src={SymfonyLogo}/>
            <Bubble name="MySQL" src={MySQLLogo}/>
            <Bubble name="PHP" src={PHPLogo}/>
            <Bubble name="JavaScript" src={JavaScriptLogo}/>
            <Bubble name="CSS" src={CSSLogo}/>
            <Bubble name="HTML" src={HTMLLogo}/>
        </div>
    );
};

export default Bubbles;
