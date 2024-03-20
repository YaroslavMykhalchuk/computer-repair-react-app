import React from "react";

const ModalWindow = () => {
    return (
        <div className="modal fade" id="repairModal" tabIndex="-1" aria-labelledby="repairModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="repairModalLabel">Форма замовлення ремонту</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрити"></button>
                    </div>
                    <div className="modal-body">
                        {/* Форма або інформація про ремонт */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                        <button type="button" className="btn btn-primary">Надіслати заявку</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;