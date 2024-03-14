import React from "react";

import AccordionItem from "../accordionItem/AccordionItem";

const Accordion = ({services, field}) => {

    return (
        <div className="accordion" id="serviceAccordion">
            {services.map((service, index) => (
                <AccordionItem key={service.id} service={service} index={index} field={field} />
            ))}
        </div>
    );
}

export default Accordion;