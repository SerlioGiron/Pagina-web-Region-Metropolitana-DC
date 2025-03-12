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
            label: "RED CRUCITAS",
            value: "red-1",
            items: [
                {
                    title: "Crucitas (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "La Cuesta (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San José de Soroguara (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "3 de Mayo (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Alemania (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Divanna (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
            ],
        },
        {
            key: 2,
            label: "RED SANTA FE",
            value: "red-2",
            items: [
                {
                    title: "Carrizal (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Nueva Capital (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Centroamérica Oeste (CIS JAPÓN)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Francisco (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Edén (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "21 de febrero (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 3,
            label: "RED VILLA ADELA",
            value: "red-3",
            items: [
                {
                    title: "Villa Adela (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Mateo (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Cruz Roja (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Santa Rosa (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Tizatillo (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Yaguacire (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Concepción de Río Grande (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Flor del Campo (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Nueva Esperanza (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Torres (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 4,
            label: "RED EL SITIO",
            value: "red-4",
            items: [
                {
                    title: "San Miguel (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "El Manchén (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Jutiapa (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Piligüin (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Juancito (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 5,
            label: "RED RÍO ABAJO",
            value: "red-5",
            items: [
                {
                    title: "El Chile (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Monte Redondo (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Río Abajo (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Río Hondo (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Las Pilas (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "La Venta del Norte (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "El Bosque (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Cofradía (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Carpintero (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Brisas del Picacho (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 6,
            label: "RED KENNEDY",
            value: "red-6",
            items: [
                {
                    title: "Pedregal (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Oscar A. Flores (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Monterrey (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "La Joya (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "La Cañada (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Solidaridad Honduras (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 7,
            label: "RED ALONSO SUAZO",
            value: "red-7",
            items: [
                {
                    title: "Alonso Suazo (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Nueva Suyapa (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Villanueva (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Benito (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Juan del Rancho (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Santa Elena (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Aguacate (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Villa Vieja (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "La Puerta (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        },
        {
            key: 8,
            label: "RED ZAMBRANO",
            value: "red-8",
            items: [
                {
                    title: "Zambrano (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Río Frío (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Francisco de Soroguara (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Las Botijas (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Divina Providencia (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Támara (CIS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Miguel Arcángel (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "San Matías (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Villa Porvenir (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Ciudad España (UAPS)",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "Penitenciaría Nacional de Támara",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                },
                {
                    title: "PNFAS",
                    desc: "Horarios de atención <br />  Ubicación <br />  Contactos <br />  Servicios que ofrece",
                }
            ],
        }
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
