import React from "react";
import MenuItem from "../menuItem/MenuItem";
import MenuDropItem from "../menuDropItem/MenuDropItem";
import Button from "../button/Button";
import logo from '../../resources/icons/logo.png';

import "./Menu.scss";

export default function Menu() {
    const servicesDropdownItems = [
        { name: 'Ремонт ноутбуків', to: '/services/notebooks' },
        { name: 'Ремонт комп\'ютерів', to: '/services/computers' },
        { name: 'Ремонт телефонів', to: '/services/phones' }
    ];

    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" width={"64"} height={"64"}/>
                Тяп-ляп
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">Про нас</MenuItem>
                    <MenuDropItem title="Послуги" dropdownItems={servicesDropdownItems}/>
                    <MenuItem to="/warranty">Гарантія</MenuItem>
                    <MenuItem to="/price">Ціни</MenuItem>
                    <MenuItem to="/contacts">Контакти</MenuItem>
                </ul>
                <Button border color="main" size="medium">Замовити дзвінок</Button>
            </div>
        </nav>
    );
}