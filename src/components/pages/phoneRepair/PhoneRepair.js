import React from "react";

import useFetch from "../../../hooks/useFetch";
import Error from "../error/Error";
import Loading from "../../loading/Loading";
import TypeRepairCard from "../../typeRepairCard/TypeRepairCard";

import phoneRepair from "../../../resources/img/phone-repair.jpg"

import "./PhoneRepair.scss";

export default function PhoneRepair() {
    const { data, isLoading, error } = useFetch(
        "http://localhost:8000/api/phone-repairs"
    );

    if(isLoading) {
        return <Loading />;
    }

    if (error && error.message) {
        return <Error code={error.code} message={error.message} />;
    }

    return (
        <div className="phone-repair">
            <h1>Ремонт телефонів</h1>

            <div className="row">
                <div className="col-12 col-lg-8 laptop-repair-img">
                    <img src={phoneRepair} alt="laptopRepair" className="img-fluid"/>
                </div>
                <div className="col-12 col-lg-4 laptop-repair-text">
                    <p className="fs-3 fw-light">
                        Вітаємо в "Тяп-ляп" – вашому надійному центрі ремонту комп'ютерів.
                        Тут кожен телефон з цегли перетворюється чудо інженерії!
                    </p>
                </div>
            </div>

            <p className="fs-3 fw-light m-4">
                У наші дні, коли телефон став невід'ємною частиною нашого життя, його справність є критично важливою. 
                У "Тяп-ляп", ми розуміємо, наскільки ви цінуєте свій час та зв'язок зі світом, 
                тому пропонуємо швидкий та якісний ремонт вашого мобільного супутника. 
                Не дозволяйте поломкам порушити ваші плани або зв'язок з близькими – довірте ремонт професіоналам!
            </p>

            <h2 className="fs-2 fw-light m-4">
                Наші послуги:
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
                    В "Тяп-ляп" ми не робимо різниці між брендами і готові прийняти на ремонт телефони відомих виробників, таких як&nbsp;
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
                    незалежно від моделі чи року випуску. Ми прагнемо забезпечити кожному телефону, що потрапив до нас, 
                    ге життя, незалежно від його "родоводу".                
                </p>
            )}

            <h2 className="fs-2 fw-light m-4">
                Чому обирають "Тяп-ляп"?
            </h2>

            <ul className="custom-checklist m-4">
                <li className="fs-4 fw-light">
                    Швидкість та ефективність: Ми цінуємо ваш час, тому ремонт здійснюється якомога швидше.
                </li>
                <li className="fs-4 fw-light">
                    Досвідчені майстри: Наша команда складається з кваліфікованих фахівців, які люблять свою справу.
                </li>
                <li className="fs-4 fw-light">
                    Гарантія на ремонт: Ми впевнені у якості наших послуг, тому надаємо гарантію на виконані роботи.
                </li>
                <li className="fs-4 fw-light">
                    Прозорі ціни: У нас немає прихованих платежів або несподіваних витрат.
                </li>
            </ul>

            <p className="fs-3 fw-light m-4">
                Зверніться до "Тяп-ляп", щоб ваш телефон знову став вашим надійним помічником! 
                Ми готові відновити його працездатність, щоб ви могли залишатися на зв'язку з тими, хто для вас важливий, 
                і не пропустити жодної важливої події у вашому житті. "Тяп-ляп" – там, де технології повертаються до життя!
            </p>
        </div>
    );
}