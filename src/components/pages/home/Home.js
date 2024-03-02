import React from "react";

import "./Home.scss";

import home2 from "../../../resources/img/home2.png"

export default function Home() {
    return (
        <div className="home">
            <h1>Ремонт і обслуговування комп'ютерної техніки</h1>
            <div className="row">
                <div className="col-12 col-md-4 home-column-block">
                    <div className="row">
                        <h2 className="col-12 fs-2"><b>"Тяп-ляп"</b> – майстерня чудес на виклик!</h2>
                        <p className="col-12 fs-3">
                            Дізнайтесь про нас більше
                            <a href="/about">тут</a>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <img src={home2} alt="home2" className="img-fluid"/>
                </div>
            </div>
            <p className="fs-3 fw-light m-4">
                Відколи комп'ютери стали частиною нашого життя, "по-нашому" стало новим стандартом якості. 
                У "Тяп-ляп" ми ремонтуємо, тюнінгуємо та реанімуємо ваші гаджети так, що самі дивуємось – як це у нас виходить? 
                Але працює! І не просто працює, а літає!
            </p>
            <p className="fs-2 fw-light m-4">
                Що ми тут виробляємо: \f058
            </p>
            <ul className="custom-checklist m-4">
                <li className="fs-4 fw-light">
                    Ремонт, як на конвеєрі чудес: неважливо, що зламалось, ми знайдемо спосіб виправити.
                </li>
                <li className="fs-4 fw-light">
                    Апгрейди, які надихають: хочете, щоб ваш комп'ютер запускався, як ракета? Ми знаємо, як це зробити.
                </li>
                <li className="fs-4 fw-light">
                    Чистка від серця: ми виганяємо пил так, що він більше не повертається.
                </li>
                <li className="fs-4 fw-light">
                    Магія налаштувань: ваша система буде працювати так гладко, що ви забудете, що таке "підвисання".
                </li>
            </ul>
            <p className="fs-3 fw-light m-4">
                Хочете, щоб ваші гаджети працювали як чарівні? "Тяп-ляп" – ваша відповідь. 
                Ми робимо як-небудь, але вам сподобається!
            </p>
        </div>
    );
}