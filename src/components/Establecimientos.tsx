"use client";
import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "../app/MTailwind";
import { Accordion, AccordionHeader, AccordionBody, Typography } from "../app/MTailwind";

export function Establecimientos() {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const data = [
        {
            key: 1,
            label: "Red #1",
            value: "red-1",
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
            key: 2,
            label: "Red #2",
            value: "red-2",
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
            key: 3,
            label: "Red #3",
            value: "red-3",
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
            key: 4,
            label: "Red #4",
            value: "red-4",
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
            key: 5,
            label: "Red #5",
            value: "red-5",
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
            key: 6,
            label: "Red #6",
            value: "red-6",
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
            key: 7,
            label: "Red #7",
            value: "red-7",
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
            key: 8,
            label: "Red #8",
            value: "red-8",
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
                }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {data.map(({ value, items }) => (
                    <TabPanel key={value} value={value} className="space-y-4">
                        {items.map((item, index) => (
                            <Accordion key={index} open={open === index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <Typography variant="h6" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {item.title}
                                    </Typography>
                                </AccordionHeader>
                                <AccordionBody>
                                    <Typography  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} children={""} />
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
