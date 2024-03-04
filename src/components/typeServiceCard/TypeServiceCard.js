import React from "react";
import { Link } from "react-router-dom";

import './TypeServiceCard.scss';

export default function TypeServiceCard({ classNames, icon, text, to }) {
    return (
        <Link to={to} className={classNames}>
            <i className={icon}></i>
            <p>{text}</p>
        </Link>
    );
}