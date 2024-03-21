import React from "react";

import AccordionDocs from "../../accordionDocs/AccordionDocs";
import AccordionItemDocs from "../../accordionItemDocs/AccordionItemDocs";
import RenderJson from "../../renderJson/RenderJson";

import {apiLaptopRepairs, apiPhoneRepairs, apiComputerRepairs, apiPrices, apiWarranties, apiTypeServices, apiTypeServicesById, apiOrder1, apiOrder2} from "./apiData";

const Docs = () => {
    return (
        <div className="docs m-5">
            <h1 className="fs-1 fw-normal">Документація</h1>

            <AccordionDocs>
                <AccordionItemDocs requestType="GET" title="/api/laptop-repairs">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/computer-repairs">
                    <RenderJson json={apiComputerRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/phone-repairs">
                    <RenderJson json={apiPhoneRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/prices">
                    <RenderJson json={apiPrices} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/warranties">
                    <RenderJson json={apiWarranties} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/type-services">
                    <RenderJson json={apiTypeServices} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/type-services/{id}">
                    <RenderJson json={apiTypeServicesById} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="POST" title="/api/order - створення замовлення">
                    <RenderJson json={apiOrder1} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="POST" title="/api/order - отримання відповіді">
                    <RenderJson json={apiOrder2} />
                </AccordionItemDocs>
            </AccordionDocs>
        </div>
    )
}

export default Docs;