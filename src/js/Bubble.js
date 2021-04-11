import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const MAX_VELOCITY = .25;
const MIN_VELOCITY = .15;
const SMALL_BUBBLE_WIDTH_REM = 8;
const LARGE_BUBBLE_WIDTH_REM = 12;
const BOUNCE_IMMUNITY_TIME_MS = 500;

const Bubble = props => {
    const generateRandomVelocity = () => ({
        // In each case, a random number between MIN_VELOCITY or MAX_VELOCITY, with a +ve or -ve sign
        x: (Math.round(Math.random()) * 2 - 1) * Math.min(Math.random() * MAX_VELOCITY, MIN_VELOCITY),
        y: (Math.round(Math.random()) * 2 - 1) * Math.min(Math.random() * MAX_VELOCITY, MIN_VELOCITY),
    });

    // Combine position and velocity because they always change together - this way it won't re-render twice
    const [vectors, setVectors] = useState({
        position: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
        },
        velocity: generateRandomVelocity(),
    });

    const xBounceTimeRef = useRef(0);
    const yBounceTimeRef = useRef(0);

    window.requestAnimationFrame(() => {
        const newVelocity = {...vectors.velocity};
        const now = new Date().getTime();

        // Detect bounces
        if (
            now >= xBounceTimeRef.current + BOUNCE_IMMUNITY_TIME_MS
            && (vectors.position.x >= 100 || vectors.position.x <= 0)
        ) {
            newVelocity.x = 0 - vectors.velocity.x;

            xBounceTimeRef.current = now;
        }

        if (
            now >= yBounceTimeRef.current + BOUNCE_IMMUNITY_TIME_MS
            && (vectors.position.y >= 100 || vectors.position.y <= 0)
        ) {
            newVelocity.y = 0 - vectors.velocity.y;

            yBounceTimeRef.current = now;
        }

        if (!window.matchMedia("(prefers-reduced-motion)").matches) {
            setVectors({
                // Move by the appropriate amount for the new velocity
                position: {
                    x: vectors.position.x + vectors.velocity.x,
                    y: vectors.position.y + vectors.velocity.y,
                },
                velocity: newVelocity,
            });
        }
    });

    const bubbleWidthRem = window.matchMedia("screen and (max-width: 1024px)").matches
        ? SMALL_BUBBLE_WIDTH_REM
        : LARGE_BUBBLE_WIDTH_REM
    ;

    // We've been working from 0-100 to keep it somple, but need to better detect edges
    const remAdjustment = {
        x: bubbleWidthRem * (vectors.position.x / 100),
        y: bubbleWidthRem * (vectors.position.y / 100)
    };

    const translateX = `translateX(calc(${vectors.position.x}vw - ${remAdjustment.x}rem))`;
    const translateY = `translateY(calc(${vectors.position.y}vh - ${remAdjustment.y}rem))`;

    const litUpClass = vectors.position.x >= 100 || vectors.position.x <= 0 || vectors.position.y >= 100 || vectors.position.y <= 0
        ? "lit-up"
        : ""
    ;

    return (
        <div
            title={props.name}
            className={`p-2 ${litUpClass}`}
            style={{
                transform: `${translateX} ${translateY}`,
            }}
        >
            <img
                src={props.src}
                alt={props.name}
            />
        </div>
    );
};

Bubble.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Bubble;
