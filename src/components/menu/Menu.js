import React from "react";
import MenuItem from "../menuItem/MenuItem";

import "./Menu.scss";

export default function Menu() {
    return (
        <nav className="nav-menu">
            <ul className="nav-menu-list">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">Про нас</MenuItem>
                <MenuItem to="/services">Послуги</MenuItem>
                <MenuItem to="/warranty">Гарантія</MenuItem>
                <MenuItem to="/price">Ціни</MenuItem>
                <MenuItem to="/contacts">Контакти</MenuItem>
            </ul>
        </nav>
    );
}