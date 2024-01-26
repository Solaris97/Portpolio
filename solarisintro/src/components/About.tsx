import React, { useState, useEffect } from "react";

const About: React.FC = () => {
    return (
        <div className="bg-indigo-500">
            <h3>About Me</h3>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
            </div>
        </div>
    )
};

export default About;