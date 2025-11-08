import React from "react"

import "../sass/circle-text.scss";

const CircleText = ({ text }) => {
    return (
        <div className="circle-text-container">
            <div
                className="circle-text"
                style={{
                    '--total': text.length,
                }}
            >
                {text.split("").map((char, charIndex) => {
                    console.log(char, charIndex)

                    return (
                        <span
                            key={charIndex}
                            className="circle-text-letter"
                            style={{
                                '--index': charIndex,
                            }}
                        >
                            {char}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default CircleText
