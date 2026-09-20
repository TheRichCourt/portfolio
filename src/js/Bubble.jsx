import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import PropTypes from "prop-types";

const MAX_VELOCITY = .25;
const MIN_VELOCITY = .15;
const SMALL_BUBBLE_WIDTH_REM = 5;
const LARGE_BUBBLE_WIDTH_REM = 12;
const BOUNCE_IMMUNITY_TIME_MS = 500;
const FRAME_DURATION_AT_60_FPS_MS = 1000 / 60;
const MAX_DELTA_TIME_MS = 1000 / 15;

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
    const animationFrameRef = useRef(null);
    const lastFrameTimeRef = useRef(null);

    const animate = useCallback(timestamp => {
        const previousFrameTime = lastFrameTimeRef.current ?? timestamp - FRAME_DURATION_AT_60_FPS_MS;
        const deltaTime = Math.min(timestamp - previousFrameTime, MAX_DELTA_TIME_MS);
        const frameScale = deltaTime / FRAME_DURATION_AT_60_FPS_MS;

        lastFrameTimeRef.current = timestamp;

        setVectors(currentVectors => {
            const newVelocity = { ...currentVectors.velocity };
            const now = Date.now();

            // Detect bounces
            if (
                now >= xBounceTimeRef.current + BOUNCE_IMMUNITY_TIME_MS
                && (currentVectors.position.x >= 100 || currentVectors.position.x <= 0)
            ) {
                newVelocity.x = 0 - currentVectors.velocity.x;
                xBounceTimeRef.current = now;
            }

            if (
                now >= yBounceTimeRef.current + BOUNCE_IMMUNITY_TIME_MS
                && (currentVectors.position.y >= 100 || currentVectors.position.y <= 0)
            ) {
                newVelocity.y = 0 - currentVectors.velocity.y;
                yBounceTimeRef.current = now;
            }

            return {
                // Velocity is expressed as movement per frame at 60 FPS.
                position: {
                    x: currentVectors.position.x + currentVectors.velocity.x * frameScale,
                    y: currentVectors.position.y + currentVectors.velocity.y * frameScale,
                },
                velocity: newVelocity,
            };
        });

        // Schedule the next frame only if animation should continue
        if (props.isAnimating && !window.matchMedia("(prefers-reduced-motion)").matches) {
            animationFrameRef.current = window.requestAnimationFrame(animate);
        }
    }, [props.isAnimating]);

    useEffect(() => {
        if (props.isAnimating && !window.matchMedia("(prefers-reduced-motion)").matches) {
            // Start the animation loop
            lastFrameTimeRef.current = null;
            animationFrameRef.current = window.requestAnimationFrame(animate);
        } else {
            // Cancel any existing animation frame
            if (animationFrameRef.current) {
                window.cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }

            lastFrameTimeRef.current = null;
        }

        // Cleanup function to cancel animation frame when component unmounts
        return () => {
            if (animationFrameRef.current) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }

            lastFrameTimeRef.current = null;
        };
    }, [props.isAnimating, animate]);

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
            className={litUpClass}
            style={{
                transform: `${translateX} ${translateY}`,
            }}
        >
            <img
                src={props.src}
                alt={`${props.name} logo`}
            />

            <span className="sr-only">{props.name}</span>
        </div>
    );
};

Bubble.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    isAnimating: PropTypes.bool,
};

export default Bubble;
