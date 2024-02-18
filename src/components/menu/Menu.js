import React from "react";
import MenuItem from "../menuItem/MenuItem";
import MenuDropItem from "../menuDropItem/MenuDropItem";

import "./Menu.scss";

export default function Menu() {
    const servicesDropdownItems = [
        { name: 'Ремонт ноутбуків', to: '/services/notebooks' },
        { name: 'Ремонт комп\'ютерів', to: '/services/computers' },
        { name: 'Ремонт телефонів', to: '/services/phones' }
    ];

    return (
        <nav className="nav-menu">
            <ul className="nav-menu-list">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">Про нас</MenuItem>
                <MenuDropItem title="Послуги" dropdownItems={servicesDropdownItems} />
                <MenuItem to="/warranty">Гарантія</MenuItem>
                <MenuItem to="/price">Ціни</MenuItem>
                <MenuItem to="/contacts">Контакти</MenuItem>
            </ul>
        </nav>
    );
}