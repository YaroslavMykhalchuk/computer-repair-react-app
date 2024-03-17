import React from "react";

import Button from "../../button/Button";

import "./Contact.scss";

export default function Contact() {
    return (
        <div className="contact">
            <h1>Контакти</h1>

            <div className="row contact-info">
                <div className="col-12 col-md-6 mb-3">
                    <i className="fas fa-mobile-alt fa-4x mb-3 ms-3"></i>
                    <h2 className="fs-2 mb-4 fw-normal">Зателефонуйте нам</h2>
                    <div className="telephone-numbers fs-4">
                        <h3 className="fw-normal">+38 096 123 45 67</h3>
                        <h3 className="fw-normal">+38 096 123 45 67</h3>
                    </div>                  
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <i className="fas fa-map-marker-alt fa-4x mb-3 ms-3"></i>
                    <h2 className="fs-2 mb-4 fw-normal">Адреса</h2>
                    <h3 className="fw-normal">м. Київ</h3>
                    <p className="fs-5 fw-normal">вул. Михайла Грушевського 5, 1 поверх, офіс 1</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <i class="fas fa-envelope fa-4x mb-3 ms-3"></i>
                    <h2 className="fs-2 mb-4 fw-normal">Напишіть нам</h2>
                    <p className="fs-4 fw-normal email">tyaplyapivproduction@gmail.com</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <i class="fas fa-clock fa-4x mb-3 ms-3"></i>
                    <h2 className="fs-2 mb-4 fw-normal">Час роботи</h2>
                    <p className="fs-4 fw-normal time">Пн-Пт: 9:00-18:00</p>
                    <p className="fs-4 fw-normal time">Сб: 9:00-17:00</p>
                </div>
            </div>

            <div className="row map-section">
                <div className="col-12 col-md-6 mb-3 map p-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.802902966287!2d30.5371730464949!3d50.44667487678384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfad233ecb25%3A0x86b1c9363cb57bb4!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgNSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1710599967338!5m2!1suk!2sua" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 col-md-6 mb-3 p-3">
                    <p className="fs-4 fw-light">
                        Ми у "Тяп-ляп" завжди раді почути від вас! Незалежно від того, чи маєте ви запитання, 
                        потребуєте консультації або хочете залишити відгук про наші послуги, 
                        наша команда готова вам допомогти.
                    </p>
                    <Button border color="main" size="large">Замовити ремонт</Button>
                </div>
            </div>
        </div>
    );
}