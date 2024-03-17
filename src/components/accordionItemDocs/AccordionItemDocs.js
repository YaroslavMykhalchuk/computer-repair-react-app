import React from 'react';

import './AccordionItemDocs.scss';

const sanitizeTitleForId = (title) => {
    return title.replace(/[^a-zA-Z0-9-_]/g, '-');
};

const getRequestTypeClassName = (requestType) => {
    switch (requestType) {
        case 'GET':
        return 'bg-get';
        case 'POST':
        return 'bg-post';
        default:
        return '';
    }
};

const AccordionItemDocs = ({ requestType, title, children }) => {
    const sanitizedTitle = sanitizeTitleForId(title);
    const targetId = `accordion-body-${sanitizedTitle}`;
    const requestTypeClass = getRequestTypeClassName(requestType);

    return (
        <div className="accordion-item mb-3">
            <h2 className="accordion-header" id={`heading-${sanitizedTitle}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${targetId}`}
                    aria-expanded="false"
                    aria-controls={targetId}
                >
                    <span className={`${requestTypeClass}`}>{requestType}</span>
                    {title}
                </button>
            </h2>
            <div
                id={targetId}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${sanitizedTitle}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body px-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItemDocs;
