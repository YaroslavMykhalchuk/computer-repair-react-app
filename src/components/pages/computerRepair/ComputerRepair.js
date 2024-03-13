import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";
import TypeRepairCard from "../../typeRepairCard/TypeRepairCard";

import computerRepair from "../../../resources/img/computer-repair.png"

import "./ComputerRepair.scss";

export default function ComputerRepair() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/computer-repairs"
    );

    if(isLoading) {
        return <Loading />;
    }

    if (error && error.message) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="computer-repair">
            <h1>Ремонт комп'ютерів</h1>

            <div className="row">
                <div className="col-12 col-lg-8 laptop-repair-img">
                    <img src={computerRepair} alt="laptopRepair" className="img-fluid"/>
                </div>
                <div className="col-12 col-lg-4 laptop-repair-text">
                    <p className="fs-3 fw-light">
                        Вітаємо в "Тяп-ляп" – вашому надійному центрі ремонту комп'ютерів.
                        Тут кожен компудахтєр перетворюється з калькулятора в машину для перемог!
                    </p>
                </div>
            </div>

            <p className="fs-3 fw-light m-4">
                У світі, де комп'ютер став вікном у величезний світ можливостей, його безперебійна робота є ключовою. 
                У "Тяп-ляп", ми розуміємо цінність вашого електронного друга і готові вдихнути в нього нове життя, коли він починає підводити. 
                З нами ваш комп'ютер не просто повернеться до роботи – він буде працювати краще, ніж коли-небудь!
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
                <p className="fs-3 fw-light m-4">
                    В "Тяп-ляп" ми не робимо різниці між брендами і готові прийняти на ремонт комп'ютери відомих виробників, таких як&nbsp;
                    {
                        data.brands.map((brands, index, array) => {
                            const sufix = index === array.length - 1 ? "" : ", ";
                            const prefix = index === array.length - 1 && array.length > 1 ? 'і ' : '';

                            return (
                                <span>
                                    {prefix}
                                    <span key={index} className="brand fw-normal">
                                        {brands.name}
                                    </span>
                                    {sufix}
                                </span>

                            )
                        })
                    }. 
                    Наша команда має необхідні знання та інструменти для роботи з цими та багатьма іншими марками, 
                    незалежно від моделі чи року випуску. Ми прагнемо забезпечити кожному комп'ютеру, що потрапив до нас, друге життя, 
                    незалежно від його "родоводу".                </p>
            )}

        </div>
    );
}