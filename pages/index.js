import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
    resetNextUuid,
} from 'react-accessible-accordion';

import '../style.css';

const Example = () => {
    // Reset uuid
    resetNextUuid();

    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>
                        Body content
                    </p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Complex title</h3>
                    <div>With a bit of description</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>
                        Body content
                    </p>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
    );
};

export default Example;
