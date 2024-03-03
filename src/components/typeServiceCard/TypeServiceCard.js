import React from "react";

export default function TypeServiceCard({ classNames, icon, text }) {
    return (
        <div className={`type-service-card ${classNames}`}>
            <i class={icon}></i>
            <p>{text}</p>
        </div>
    );
}