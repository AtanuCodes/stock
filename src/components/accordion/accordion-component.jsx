import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";

const AccordionComponent = ({header, key="0", body, bodyClassName, ...props}) => {
    return (
        <Accordion key={key} type="single" collapsible {...props}>
            <AccordionItem value={key}>
                <AccordionTrigger className="text-lg font-semibold p-2">
                    {header}
                </AccordionTrigger>
                <AccordionContent className={`p-2 ${bodyClassName}`}>
                    {body}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionComponent;