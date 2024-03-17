import React from "react";

import AccordionDocs from "../../accordionDocs/AccordionDocs";
import AccordionItemDocs from "../../accordionItemDocs/AccordionItemDocs";
import RenderJson from "../../renderJson/RenderJson";

import {apiLaptopRepairs} from "./apiData";

const Docs = () => {
    return (
        <div className="docs m-5">
            <h1 className="fs-1 fw-normal">Документація</h1>

            <AccordionDocs>
                <AccordionItemDocs requestType="GET" title="/api/laptop-repairs">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/computer-repairs">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/phone-repairs">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/prices">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
                <AccordionItemDocs requestType="GET" title="/api/warranties">
                    <RenderJson json={apiLaptopRepairs} />
                </AccordionItemDocs>
            </AccordionDocs>
        </div>
    )
}

export default Docs;