"use client";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "../app/MTailwind";

export function Preguntas() {
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);
z
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    return (
        <Card className="rounded-none h-full w-full flex-row">
            <CardBody>
                <div className=" p-4">
                    <Typography
                        variant="h6"
                        color="gray"
                        className="mb-4 uppercase"
                    >
                        Preguntas Frecuentes
                    </Typography>
                    <Accordion open={openAcc1}>
                        <AccordionHeader onClick={handleOpenAcc1}>
                            What is Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc2}>
                        <AccordionHeader onClick={handleOpenAcc2}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc3}>
                        <AccordionHeader onClick={handleOpenAcc3}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
            </CardBody>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
        </Card>
    );
}
