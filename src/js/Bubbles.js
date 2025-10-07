import React, { useEffect, useState } from "react";
import Bubble from "./Bubble";

import "../sass/bubbles.scss";

import DockerLogo from "../images/skill-logos/docker.svg";
import JoomlaLogo from "../images/skill-logos/joomla.svg";
import UnityLogo from "../images/skill-logos/unity.svg";
import SASSLogo from "../images/skill-logos/sass.svg";
import SvelteLogo from "../images/skill-logos/svelte.svg";
import ReduxLogo from "../images/skill-logos/redux.svg";
import ReactLogo from "../images/skill-logos/react.svg";
import SymfonyLogo from "../images/skill-logos/symfony.svg";
import MySQLLogo from "../images/skill-logos/mysql.svg";
import PHPLogo from "../images/skill-logos/php.svg";
import TypeScriptLogo from "../images/skill-logos/ts.svg";
import JavaScriptLogo from "../images/skill-logos/js.svg";
import CSSLogo from "../images/skill-logos/css3.svg";
import HTMLLogo from "../images/skill-logos/html5.svg";
import WebpackLogo from "../images/skill-logos/webpack.svg";

const Bubbles = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const bubblesSectionElem = document.getElementById("bubbles_section");

        new IntersectionObserver(
            entries => setIsAnimating(entries[0].isIntersecting),
            {
                root: null,
                rootMargin: "0px",
                threshold: 0,
            }
        ).observe(bubblesSectionElem);
    }, []);

    return (
        <div className="bubbles-container">
            <Bubble isAnimating={isAnimating} name="Joomla" src={JoomlaLogo}/>
            <Bubble isAnimating={isAnimating} name="Webpack" src={WebpackLogo}/>
            <Bubble isAnimating={isAnimating} name="Docker" src={DockerLogo}/>
            <Bubble isAnimating={isAnimating} name="Unity" src={UnityLogo}/>
            <Bubble isAnimating={isAnimating} name="SASS" src={SASSLogo}/>
            <Bubble isAnimating={isAnimating} name="Redux" src={ReduxLogo}/>
            <Bubble isAnimating={isAnimating} name="MySQL" src={MySQLLogo}/>
            <Bubble isAnimating={isAnimating} name="React" src={ReactLogo}/>
            <Bubble isAnimating={isAnimating} name="Svelte" src={SvelteLogo}/>
            <Bubble isAnimating={isAnimating} name="Symfony" src={SymfonyLogo}/>
            <Bubble isAnimating={isAnimating} name="PHP" src={PHPLogo}/>
            <Bubble isAnimating={isAnimating} name="TypeScript" src={TypeScriptLogo}/>
            <Bubble isAnimating={isAnimating} name="JavaScript" src={JavaScriptLogo}/>
            <Bubble isAnimating={isAnimating} name="CSS" src={CSSLogo}/>
            <Bubble isAnimating={isAnimating} name="HTML" src={HTMLLogo}/>
        </div>
    );
};

export default Bubbles;
