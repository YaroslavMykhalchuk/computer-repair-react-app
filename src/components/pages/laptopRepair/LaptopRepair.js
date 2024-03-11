import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";
import TypeRepairCard from "../../typeRepairCard/TypeRepairCard";

import laptopRepair from "../../../resources/img/laptop-repair.png"

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

            <div className="row">
                <div className="col-12 col-lg-8 laptop-repair-img">
                    <img src={laptopRepair} alt="laptopRepair" className="img-fluid"/>
                </div>
                <div className="col-12 col-lg-4 laptop-repair-text">
                    <p className="fs-3 fw-light">
                        Ласкаво просимо в лігво "Тяп-ляп", де ваш ноутбук знайде друге життя! 
                        Тут кожен гаджет перетворюється, відкриваючи нові горизонти можливостей.
                    </p>
                </div>
            </div>

            <p className="fs-3 fw-light m-4">
                Ноутбуки – це не просто техніка, це наші вірні супутники, які іноді потребують трохи TLC (Tender Loving Care, або ж ніжної турботи, 
                якщо по-нашому). І ось тут-то на сцену виходить "Тяп-ляп" – ваш персональний рятувальник ноутбуків, який вдихне в них нове життя!
            </p>

            <h2 className="fs-2 fw-light m-4">
                Наші ексклюзивні послуги:
            </h2>

            <div className="container">
                <div className="row">
                    {data.type_repairs.map((repair) => (
                        <div key={repair.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            <TypeRepairCard text={repair.name} />
                        </div>
                    ))}
                </div>
            </div>

            {data && (
                <p className="fs-3 fw-light m-4 list-brands">
                    У "Тяп-ляп" ми обіймаємо широкий спектр ноутбуків, пропонуючи ексклюзивні послуги для брендів:&nbsp;
                    {
                        data.brands.map((brands, index, array) => {
                            const sufix = index === array.length - 1 ? "" : ", ";
                            const prefix = index === array.length - 1 && array.length > 1 ? 'і ' : '';

                            return (
                                <span>
                                    {prefix}
                                    <span key={index} className="brand">
                                        {brands.name}
                                    </span>
                                    {sufix}
                                </span>

                            )
                        })
                    }. 
                    Незалежно від того, наскільки популярний або рідкісний ваш ноутбук, наша експертиза та послуги охоплюють 
                    усе необхідне для його відновлення та оновлення.
                </p>
            )}

            <p className="fs-3 fw-light m-4">
                Тут, у веселій імперії "Тяп-ляп", ми не тільки лагодимо техніку – ми вдихаємо в неї життя, 
                використовуючи всю свою креативність та винахідливість. 
                Ваш ноутбук перетвориться з простого пристрою на справжнього віртуального компаньйона, 
                готового допомагати вам підкорювати нові вершини у цифровому світі. 
                Тож готуйтеся до пригод разом з "Тяп-ляп", де ми зробимо все можливе та неможливе, щоб ви могли сказати: 
                "Мій ноутбук? О, він не просто працює – він робить моє життя казковим!"
            </p>

        </div>
    );
}