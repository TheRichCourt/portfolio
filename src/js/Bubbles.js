import React from "react";
import Bubble from "./Bubble";

import "../sass/bubbles.scss";

const Bubbles = () => {
    return (
        <div className="bubbles-container">
            <Bubble name="Joomla" src="/images/skill-logos/joomla.svg"/>
            <Bubble name="Unity" src="/images/skill-logos/unity.svg"/>
            <Bubble name="SASS" src="/images/skill-logos/sass.svg"/>
            <Bubble name="Redux" src="/images/skill-logos/redux.svg"/>
            <Bubble name="React" src="/images/skill-logos/react.svg"/>
            <Bubble name="Symfony" src="/images/skill-logos/symfony.svg"/>
            <Bubble name="MySQL" src="/images/skill-logos/mysql.svg"/>
            <Bubble name="PHP" src="/images/skill-logos/php.svg"/>
            <Bubble name="JavaScript" src="/images/skill-logos/js.svg"/>
            <Bubble name="CSS" src="/images/skill-logos/css3.svg"/>
            <Bubble name="HTML" src="/images/skill-logos/html5.svg"/>
        </div>
    );
};

export default Bubbles;
