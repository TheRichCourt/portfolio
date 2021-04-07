import React, { useEffect, useState } from "react";
import PropTypes  from "prop-types";

import "../sass/crazy-text.scss";

const SPEED = 140;

const CrazyText = props => {
    const [length, setLength] = useState(0);
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        const lengthWithoutSpaces = props.children.replace(/\s/g, '').length;

        setShowSubtitle(false);

        const interval = setInterval(() => {
            setLength(length => {
                if (length === lengthWithoutSpaces) {
                    clearInterval(interval);

                    setShowSubtitle(true);

                    return length;
                }

                return length + 1;
            });
        }, SPEED);

        return () => clearInterval(interval);
    }, [length]);

    const createSpanClasses = (currentLetterIndex) => {
        if (currentLetterIndex > length) {
            return "crazy-text-letter hidden";
        }

        if (currentLetterIndex === length) {
            return "crazy-text-letter crazy";
        }

        // It's less than
        return "crazy-text-letter";
    };

    let letterIndex = 0;

    return (
        <div
            onClick={() => setLength(0)}
            className="crazy-text-container"
            title="Click to replay the animation"
        >
            <h1>
                {props.children.split(" ").map((word, wordIndex) => {
                    return (
                        <React.Fragment key={wordIndex}>
                            <span className="crazy-text-word">
                                {word.split("").map((char, charIndex) => {
                                    return (
                                        <span
                                            className={createSpanClasses(letterIndex++)}
                                            key={charIndex}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </span>

                            {/* Space between the words */}
                            {" "}
                        </React.Fragment>
                    );
                })}
            </h1>

            <p onClick={() => setLength(0)} className={`subtitle ${showSubtitle ? "transitionable" : "fade-out-down"}`}>
                {props.subtitle}
            </p>
        </div>
    );
};

CrazyText.propTypes = {
    children: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default CrazyText;
