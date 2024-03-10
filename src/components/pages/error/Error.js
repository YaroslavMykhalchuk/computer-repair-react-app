import React from "react";
import { Link } from "react-router-dom";

import "./Error.scss";

import image from "../../../resources/img/error.gif";

const Error = ({message}) => {
    return (
        <div className="error">
            <h1 className="fs-1 fw-light">404</h1>
            <p className="fs-4 fw-light">{message}</p>
            <img src={image} alt="error"/>
            <Link to="/" className="fs-5 fw-medium align-text-center m-3 error-link">Повернутися на головну</Link>
        </div>
    );
};

export default Error;