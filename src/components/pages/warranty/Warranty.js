import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";
import Accordion from "../../accordion/Accordion";

import "./Warranty.scss";

export default function Warranty() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/warranties"
    );

    if(isLoading) {
        return <Loading />;
    }

    if (error && error.message) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="warranty">
            <h1>Гарантія</h1>

            <p className="fs-3 fw-light m-2">
                У "Тяп-ляп", ми не просто відновлюємо ваші пристрої, ми надаємо спокій та впевненість у кожному виконаному нами ремонті. 
                Наша гарантійна політика розроблена з метою захистити ваші інтереси та забезпечити максимальне задоволення від наших послуг.
            </p>

            <h2 className="fs-2 fw-light m-4">
                Наші гарантійні зобов'язання:
            </h2>

            <Accordion services={data.type_service} field="Гарантія" />

            <p className="fs-3 fw-light m-2">
                <span>Важливо: </span>Гарантія не поширюється на пошкодження, спричинені неправильним використанням пристрою, 
                його випадковим пошкодженням після ремонту, а також на втручання в ремонтні роботи третіми особами після нашого обслуговування.
            </p>
        </div>
    );
}