"use client";
import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "../app/MTailwind";
import { Accordion, AccordionHeader, AccordionBody, Typography } from "../app/MTailwind";

export function Establecimientos() {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const data = [
        {
            label: "Establecimiento #1",
            value: "establecimiento-1",
            items: [
                {
                    title: "HTML Guide",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                },
            ],
        },
        {
            label: "Establecimiento #2",
            value: "establecimiento-2",
            items: [
                {
                    title: "HTML Guide",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                },
            ],
        },
        {
            label: "Establecimiento #3",
            value: "establecimiento-3",
            items: [
                {
                    title: "HTML Guide",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                },
            ],
        },
        {
            label: "Establecimiento #4",
            value: "establecimiento-4",
            items: [
                {
                    title: "HTML Guide",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "HTML5 Features",
                    desc: "Explore the new features in HTML5.",
                },
            ],
        },
        {
            label: "Establecimiento #5",
            value: "establecimiento-5",
            items: [
            {
                title: "HTML Guide",
                desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
            },
            {
                title: "HTML5 Features",
                desc: "Explore the new features in HTML5.",
            },
            ],
        },
        {
            label: "Establecimiento #6",
            value: "establecimiento-6",
            items: [
            {
                title: "HTML Guide",
                desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
            },
            {
                title: "HTML5 Features",
                desc: "Explore the new features in HTML5.",
            },
            ],
        },
        {
            label: "Establecimiento #7",
            value: "establecimiento-7",
            items: [
            {
                title: "HTML Guide",
                desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
            },
            {
                title: "HTML5 Features",
                desc: "Explore the new features in HTML5.",
            },
            ],
        },
        {
            label: "Establecimiento #8",
            value: "establecimiento-8",
            items: [
            {
                title: "HTML Guide",
                desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
            },
            {
                title: "HTML5 Features",
                desc: "Explore the new features in HTML5.",
            },
            ],
        }
    ];

    return (
        <Tabs value="establecimiento-1" orientation="horizontal" className="pt-12 pb-12 max-w-[1100px] mx-auto">
            <TabsHeader
                className="bg-transparent"
                indicatorProps={{
                    className: "bg-gray-900/10 shadow-none !text-gray-900",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, items }) => (
                    <TabPanel key={value} value={value} className="space-y-4">
                        {items.map((item, index) => (
                            <Accordion open={open === index}>
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    <Typography variant="h6" color="blue-gray">
                                        {item.title}
                                    </Typography>
                                </AccordionHeader>
                                <AccordionBody>
                                    <Typography dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
