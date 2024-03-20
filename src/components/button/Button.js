import React from "react";

import "./Button.scss";

export default function Button({ children, border, color, size, ...modal }) {
    const buttonStyle = `button ${border ? 'border' : ''} ${size} ${color}-color`;

    return (
        <button className={buttonStyle} {...modal}>
            {children}
        </button>
    );
}