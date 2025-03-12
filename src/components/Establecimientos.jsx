"use client";
import React from "react";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "../app/MTailwind";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "../app/MTailwind";

export function Establecimientos() {
    const [open, setOpen] = React.useState(null);
    const [openItems, setOpenItems] = React.useState([]);
    const [isVertical, setIsVertical] = React.useState(false);

    React.useEffect(() => {
        // Check screen width on mount and when window resizes
        const handleResize = () => {
            setIsVertical(window.innerWidth < 768); // 768px is typical tablet breakpoint
        };
        
        // Set initial orientation
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpen = (tabValue, index) => {
        const compositeKey = `${tabValue}-${index}`;
        setOpenItems((prev) =>
            prev.includes(compositeKey)
                ? prev.filter((item) => item !== compositeKey)
                : [...prev, compositeKey]
        );
    };
    const data = [
        {
            key: 1,
            label: "Red #1",
            value: "red-1",
            items: [
                {
                    title: "red 1 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 1 establecimiento 2",
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
                    title: "red 2 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 2 establecimiento 2",
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
                    title: "red 3 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 3 establecimiento 2",
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
                    title: "red 4 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 4 establecimiento 2",
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
                    title: "red 5 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 5 establecimiento 2",
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
                    title: "red 6 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 6 establecimiento 2",
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
                    title: "red 7 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 7 establecimiento 2",
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
                    title: "red 8 establecimiento 1",
                    desc: " Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "red 8 establecimiento 2",
                    desc: "Explore the new features in HTML5.",
                },
            ],
        },
    ];

    const handleTabChange = () => {
        setOpenItems([]); // Reset openItems when tab changes
    };

    return (
        <div>
            
            <Tabs
                value="red-1"
                orientation={isVertical ? "vertical" : "horizontal"}
                className={`pt-12 pb-12 mx-auto ${isVertical ? 'max-w-[95%]' : 'max-w-[1100px]'}`}
                onChange={handleTabChange}
            >
                <TabsHeader
                    className={`bg-transparent ${
                        isVertical 
                            ? 'flex-col justify-start items-start w-full max-w-[200px] mr-4'
                            : ''
                    }`}
                    indicatorProps={{
                        className: "bg-gray-900/10 shadow-none !text-gray-900",
                    }}
                >
                    {data.map(({label, value}) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className={isVertical ? "flex-grow" : ""}>
                    {data.map(({value, items}) => (
                        <TabPanel
                            key={value}
                            value={value}
                            className="space-y-4"
                        >
                            {items.map((item, index) => (
                                <Accordion
                                    key={index}
                                    open={openItems.includes(
                                        `${value}-${index}`
                                    )}
                                >
                                    <AccordionHeader
                                        onClick={() => handleOpen(value, index)}
                                    >
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                        >
                                            {item.title}
                                        </Typography>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Typography
                                            variant="paragraph"
                                            color="gray"
                                        >
                                            {item.desc
                                                .split("<br />")
                                                .map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                        </Typography>
                                    </AccordionBody>
                                </Accordion>
                            ))}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}
