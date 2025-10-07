import React from "react";

const Copyright = () => {
    const currentYear = new Date().getFullYear();
console.log(currentYear);
    return (
        <p>Rich Court © 2015 - {currentYear}.</p>
    );
};

export default Copyright;
