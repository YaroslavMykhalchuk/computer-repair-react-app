import React from "react";
import { Link, useMatch } from "react-router-dom";
import "./menuItem.scss"; // Переконайтеся, що стилі імпортовані правильно

export default function MenuItem({ to, children }) {
    const match = useMatch(to);

    return (
        <li className="nav-item">
            <Link 
                to={to} 
                className={`nav-link ${match ? "active-link" : ""}`}>
                {children}
            </Link>
        </li>
    );
}
