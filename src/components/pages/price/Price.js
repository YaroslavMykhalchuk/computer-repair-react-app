import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";
import Accordion from "../../accordion/Accordion";

import "./Price.scss";

export default function Price() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/prices"
    );

    if(isLoading) {
        return <Loading />;
    }

    if (error && error.message) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="price">
            <h1>Ціни</h1>

            <p className="fs-3 fw-light m-2">
                Ласкаво просимо на сторінку цін "Тяп-ляп", де прозорість та доступність стоять на першому місці! 
                Ми розуміємо, наскільки важливо для вас знати вартість послуг заздалегідь, 
                тому надаємо повний перелік наших цін на ремонт та обслуговування вашої комп'ютерної техніки. 
                Наша мета – забезпечити високоякісний ремонт за розумними цінами.
            </p>

            <h2 className="fs-2 fw-light m-4">
                Прейскурант
            </h2>

            <Accordion services={data.type_service} field="Ціна" />
        </div>
    );
}