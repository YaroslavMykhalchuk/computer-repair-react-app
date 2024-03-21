export const apiLaptopRepairs = {
    "type_repairs": [
        {
            "id": 1,
            "name": "Комплексна діагностика"
        },
        {
            "id": 2,
            "name": "Ремонт або заміна клавіатури"
        },
        {
            "id": 3,
            "name": "Заміна роз’ємів(USB, живлення та ін.)"
        }
    ],
    "brands": [
        {
            "id": 5,
            "name": "Asus"
        },
        {
            "id": 6,
            "name": "Lenovo"
        },
        {
            "id": 7,
            "name": "Dell"
        }
    ]
};

export const apiComputerRepairs = {
    "type_repairs": [],
    "brands": [
        {
            "id": 5,
            "name": "Asus"
        },
        {
            "id": 6,
            "name": "Lenovo"
        }
    ]
};

export const apiPhoneRepairs = {
    "type_repairs": [],
    "brands": []
};

export const apiPrices = {
    "type_service": [
        {
            "id": 1,
            "name": "Ремонт ноутбуків",
            "type_repair": [
                {
                    "id": 1,
                    "name": "Комплексна діагностика",
                    "price": "100.00"
                },
                {
                    "id": 2,
                    "name": "Ремонт або заміна клавіатури",
                    "price": "200.00"
                },
                {
                    "id": 3,
                    "name": "Заміна роз’ємів(USB, живлення та ін.)",
                    "price": "300.00"
                },
                {
                    "id": 4,
                    "name": "Заміна корпусу та його частин",
                    "price": "400.00"
                },
                {
                    "id": 5,
                    "name": "Ремонт материнських плат, заміна мостів та інших мікросхем",
                    "price": "500.00"
                },
                {
                    "id": 6,
                    "name": "Заміна комплектуючих (процесорів, HDD, оптичних приводів, пам’яті та ін.)",
                    "price": "600.00"
                },
                {
                    "id": 7,
                    "name": "Заміна акумуляторів та блоків живлення",
                    "price": "700.00"
                }
            ]
        },
        {
            "id": 2,
            "name": "Ремонт телефонів",
            "type_repair": []
        },
        {
            "id": 3,
            "name": "Ремонт комп'ютерів",
            "type_repair": []
        }
    ]
};

export const apiWarranties = {
    "type_service": [
        {
            "id": 1,
            "name": "Ремонт ноутбуків",
            "type_repair": [
                {
                    "id": 1,
                    "name": "Комплексна діагностика",
                    "warranty_duration": null
                },
                {
                    "id": 2,
                    "name": "Ремонт або заміна клавіатури",
                    "warranty_duration": null
                },
                {
                    "id": 3,
                    "name": "Заміна роз’ємів(USB, живлення та ін.)",
                    "warranty_duration": null
                },
                {
                    "id": 4,
                    "name": "Заміна корпусу та його частин",
                    "warranty_duration": null
                },
                {
                    "id": 5,
                    "name": "Ремонт материнських плат, заміна мостів та інших мікросхем",
                    "warranty_duration": null
                },
                {
                    "id": 6,
                    "name": "Заміна комплектуючих (процесорів, HDD, оптичних приводів, пам’яті та ін.)",
                    "warranty_duration": null
                },
                {
                    "id": 7,
                    "name": "Заміна акумуляторів та блоків живлення",
                    "warranty_duration": null
                }
            ]
        },
        {
            "id": 2,
            "name": "Ремонт телефонів",
            "type_repair": []
        },
        {
            "id": 3,
            "name": "Ремонт комп'ютерів",
            "type_repair": []
        }
    ]
}

export const apiTypeServices = {
    "services": [
        {
            "id": 1,
            "name": "Ремонт ноутбуків"
        },
        {
            "id": 2,
            "name": "Ремонт телефонів"
        },
        {
            "id": 3,
            "name": "Ремонт комп'ютерів"
        }
    ]
};

export const apiTypeServicesById = {
    "type_repairs": [
        {
            "id": 1,
            "name": "Комплексна діагностика",
            "price": "100.00"
        },
        {
            "id": 2,
            "name": "Ремонт або заміна клавіатури",
            "price": "200.00"
        },
        {
            "id": 3,
            "name": "Заміна роз’ємів(USB, живлення та ін.)",
            "price": "300.00"
        },
        {
            "id": 4,
            "name": "Заміна корпусу та його частин",
            "price": "400.00"
        },
        {
            "id": 5,
            "name": "Ремонт материнських плат, заміна мостів та інших мікросхем",
            "price": "500.00"
        },
        {
            "id": 6,
            "name": "Заміна комплектуючих (процесорів, HDD, оптичних приводів, пам’яті та ін.)",
            "price": "600.00"
        },
        {
            "id": 7,
            "name": "Заміна акумуляторів та блоків живлення",
            "price": "700.00"
        }
    ],
    "brands": [
        {
            "id": 5,
            "name": "Asus"
        },
        {
            "id": 6,
            "name": "Lenovo"
        },
        {
            "id": 7,
            "name": "Dell"
        },
        {
            "id": 8,
            "name": "HP"
        },
        {
            "id": 9,
            "name": "Acer"
        },
        {
            "id": 10,
            "name": "MSI"
        }
    ]
}

export const apiOrder1 = {
    "email": "user@example.com",
    "type_service_id": "1",
    "type_repair_id": "1",
    "description": "Тестове замовлення",
    "price": "100.00"
}

export const apiOrder2 = {
    "message": "Order created successfully"
}