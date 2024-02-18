import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './MenuDropItem.scss';

// Окремий компонент для пункту випадаючого меню
const DropdownLink = ({ to, name }) => {
  const match = useMatch(to);
  return (
    <Link to={to} className={`${match ? 'active' : ''} dropdown-item`}>
      {name}
    </Link>
  );
};

const MenuDropItem = ({ title, dropdownItems }) => {
  return (
    <li className="nav-item dropdown">
      <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </button>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {dropdownItems.map((item, index) => (
          <DropdownLink key={index} to={item.to} name={item.name} />
        ))}
      </div>
    </li>
  );
};

export default MenuDropItem;
