import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";

import "./LaptopRepair.scss";

export default function LaptopRepair() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/laptop-repairs"
    );

    if(isLoading) {
        return <Loading />;
    }

    if(error) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="laptop-repair">
            <h1>Ремонт ноутбуків</h1>
            {data}
        </div>
    );
}