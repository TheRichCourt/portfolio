import "../sass/circle-text.scss";

const CIRCLE_RADIUS = 40;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const CIRCLE_PATH = "M 50 10 A 40 40 0 1 1 49.999 10";

const CircleText = ({ text }) => {
    return (
        <div className="circle-text-container">
            <svg
                className="circle-text"
                viewBox="0 0 100 100"
                aria-hidden="true"
            >
                <defs>
                    <path id="circle-text-path" d={CIRCLE_PATH} />
                </defs>

                <g className="circle-text-rotator">
                    <text
                        className="circle-text-content"
                        textLength={CIRCLE_CIRCUMFERENCE}
                        lengthAdjust="spacing"
                    >
                        <textPath href="#circle-text-path">{text}</textPath>
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default CircleText;
