import React, { useState } from "react";

import useFetchModal from "../../hooks/useFetchModal";
import useFetchSelect from "../../hooks/useFetchSelect";

const ModalWindow = () => {
    // const [showModal, setShowModal] = useState(false);
    const { data: services, isLoadingServices, errorServices } = useFetchModal("http://localhost:8000/api/type-services", "repairModal");

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const [selectedServiceId, setSelectedServiceId] = useState('');
    const { data: serviceDetails, isLoadingDetails, errorDetails } = useFetchSelect("http://localhost:8000/api/type-services", selectedServiceId);

    const [formData, setFormData] = useState({
        email: '',
        type_service_id: '',
        type_repair_id: '',
        brand_id: '',
        description: '',
        price: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === 'type_service_id') {
            setSelectedServiceId(value);
        }
        setFormData(prev => ({
            ...prev,
            [name]: parseInt(value, 10) || ''
        }));
    };
    
    
    const handleSubmit = (e) => {
        console.log(JSON.stringify(formData));
        e.preventDefault();

        fetch("http://localhost:8000/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.message) {
                setToastMessage(data.message);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 5000);

                // хз чи працює
                const modalInstance = new window.bootstrap.Modal(document.getElementById('repairModal'));
                modalInstance.hide();
            }
        })
        .catch(error => {
            console.error("Помилка при відправленні форми: ", error);
        });
    };

    return (
        <>  
            <div className="modal fade" id="repairModal" tabIndex="-1" aria-labelledby="repairModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content text-start">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <label className="modal-title fw-light fs-4" id="repairModalLabel">Замовлення ремонту</label>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрити"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Електронна пошта</label>
                                    <input type="email" className="form-control" id="inputEmail" name="email" required onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="selectService" className="form-label">Тип сервісу</label>
                                    <select id="selectService" className="form-select" name="type_service_id" onChange={handleSelectChange}>
                                        {isLoadingServices ? (
                                            <option>Завантаження...</option>
                                        ) : (
                                            <>
                                                <option value="">Оберіть сервіс</option>
                                                {services?.map((service, index) => (
                                                    <option key={index} value={service.id}>{service.name}</option>
                                                ))}
                                            </>
                                        )}
                                    </select>
                                </div>
                                {errorServices && <div className="alert alert-danger" role="alert">{errorServices.message}</div>}
                                
                                {isLoadingDetails && 
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                }
                                {errorDetails && <div className="alert alert-danger" role="alert">{errorDetails.message}</div>}
                                {serviceDetails && (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="selectRepair" className="form-label">Тип ремонту</label>
                                            <select id="selectRepair" className="form-select" name="type_repair_id" onChange={handleSelectChange}>
                                                <option value="">Оберіть ремонт</option>
                                                {serviceDetails?.type_repairs?.map((repair, index) => (
                                                    <option key={index} value={repair.id}>{repair.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="selectBrand" className="form-label">Бренд</label>
                                            <select id="selectBrand" className="form-select" name="brand_id" onChange={handleSelectChange}>
                                                <option value="">Оберіть бренд</option>
                                                {serviceDetails?.brands?.map((brand, index) => (
                                                    <option key={index} value={brand.id}>{brand.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Опис проблеми</label>
                                            <textarea className="form-control" id="description" rows="3" name="description" required onChange={handleInputChange}></textarea>
                                        </div>
                                        <input 
                                            type="hidden" 
                                            name="price" 
                                            value={
                                                serviceDetails 
                                                    ? parseFloat(serviceDetails.type_repairs.find(repair => repair.id === parseInt(formData.type_repair_id, 10))?.price) || '' 
                                                    : ''
                                            } 
                                        />
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                                <button type="submit" className="btn btn-primary">Надіслати заявку</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div aria-live="polite" aria-atomic="true" className="position-relative">
                {showToast && (
                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                        <div className={`toast show`} role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">Повідомлення</strong>
                                <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Закрити"></button>
                            </div>
                            <div className="toast-body">
                                {toastMessage}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ModalWindow;
