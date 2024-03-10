import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";

import "./LaptopRepair.scss";

export default function LaptopRepair() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/laptop-repairs"
    );

    if(isLoading) {
        return <Loading />;
    }

    if (error && error.message) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="laptop-repair">
            <h1>Ремонт ноутбуків</h1>
            
        </div>
    );
}