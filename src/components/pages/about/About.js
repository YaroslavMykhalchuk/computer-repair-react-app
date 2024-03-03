import React from "react";

import "./About.scss";

export default function About() {
    return (
        <div className="about">
            <h1>Про нас</h1>
            <p className="fs-3 fw-light m-2">
                Зустрічайте "Тяп-ляп" – магічну майстерню, де немає неможливого!
            </p>
            
            <div className="row about-column-block">
                <div className="d-flex align-items-center flex-column flex-md-row w-100">
                    <h2 className="col-12 col-md-4 fs-2 fw-normal header-main-color">
                        Історія "Тяп-ляп"
                    </h2>
                    <div className="col-12 col-md-8 fs-3 fw-light">
                        <p>
                            "Тяп-ляп" починався як мрія двох друзів-ентузіастів, які вірили в те, що кожна проблема з технікою – 
                            це просто черговий виклик, а не кінець світу. Одного сонячного дня 2015 року, в гаражі, заповненому 
                            інструментами, запчастинами і старими комп'ютерами, вони вирішили, що пора ділитися своєю пристрастю і 
                            майстерністю зі світом. Так з'явився "Тяп-ляп".
                        </p>
                        <p>
                            Від тих пір ми пройшли довгий шлях від маленької гаражної майстерні до великого сервісного центру, 
                            де кожен день творяться чудеса. Ми зберегли дух творчості, винахідливості та неформального підходу до 
                            роботи, який і приваблює до нас клієнтів.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row short-info-block">
                <div className="col-12 col-md-4">
                    <h4 className="fw-light short-info-header">
                        <span className="short-info-string">2,100</span>
                        <span className="short-info-unit">+</span>
                    </h4>
                    <p className="fs-5 fw-light">
                        За час нашого безбашенного пригоди в "Тяп-ляп" ми змайстрували і відполірували понад 2100 штук усякої від техніки до дріб'язку! 
                        І це не просто цифри, це скарбниця спогадів про кожен врятований гаджет.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h4 className="fw-light short-info-header">
                        <span className="short-info-string">70</span>
                        <span className="short-info-unit">%</span>
                    </h4>
                    <p className="fs-5 fw-light">
                        Половина тих, хто хоч раз побував у нашій майстерні чудес, повертаються знову і знову. 
                        Мабуть, в нашій майстерності є щось магічне, а може, просто ми круто робимо свою справу, і людям це до душі.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h4 className="fw-light short-info-header">
                        <span className="short-info-string">15</span>
                        <span className="short-info-unit">x</span>
                    </h4>
                    <p className="fs-5 fw-light">
                        А тепер тримайтесь, за останні три роки ми так розрослись, що в 7 разів збільшили наші могутності! 
                        Тепер "Тяп-ляп" не просто майстерня – це ціла фабрика добра та швидкості для вашої техніки.
                    </p>
                </div>
            </div>

            <p className="fs-2 fw-light m-4">
                Наша філософія:
            </p>
            <ul className="custom-checklist m-4">
                <li className="fs-4 fw-light">
                    Робимо як-небудь, але завжди з душею. 
                    Ми віримо, що кожна проблема має рішення, і часто наше "як-небудь" перевершує всі очікування.
                </li>
                <li className="fs-4 fw-light">
                    Інновації на кожному кроці. 
                    Наш гаражний дух спонукає нас шукати незвичайні рішення, які часто стають революційними.
                </li>
                <li className="fs-4 fw-light">
                    Неформалізм. Ми – велика родина, і кожен клієнт стає її частиною. 
                    У нас немає бар'єрів між майстром і замовником.
                </li>
            </ul>

            <div>
                <h3 className="fs-2 fw-light text-center mb-3">Послуги сервісу "Тяп-ляп" :</h3>
                
            </div>
            
        </div>
    );
}