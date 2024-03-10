import React from "react";

import "./TypeRepairCard.scss";

const TypeRepairCard = ({text}) => {
    return (
        <div className="card typeRepairCard">
            <div className="card-body">
                <p className="card-text fs-6 fw-lighter">{text}</p>
            </div>
        </div>
    );
};

export default TypeRepairCard;