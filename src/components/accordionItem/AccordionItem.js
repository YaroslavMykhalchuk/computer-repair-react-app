import React from "react";

import Table from "../table/Table";

import './AccordionItem.scss';

const AccordionItem = ({ service, index, field }) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${service.id}`}>
                <button
                    className="accordion-button fs-3 fw-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${service.id}`}
                    aria-expanded="true"
                    aria-controls={`collapse${service.id}`}
                >
                {service.name}
                </button>
            </h2>
            <div
                id={`collapse${service.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${service.id}`}
                data-bs-parent="#serviceAccordion"
            >
                <div className="accordion-body">
                    <Table repairs={service.type_repair} field={field}/>
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;