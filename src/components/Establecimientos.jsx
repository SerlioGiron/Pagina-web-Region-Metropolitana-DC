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
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => {
            window.removeEventListener("resize", handleResize);
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
                    title: "Alemania (CIS)",
                    desc: "Correo: alcon2099@gmail.com cisalemania@gmail.com <br /> Teléfono: 95647636 <br /> Código RUPS: 248",
                },
                {
                    title: "Crucitas (CIS)",
                    desc: "Correo: cesamolascrucitas@yahoo.es ixram93@gmail.com <br /> Teléfono: 33581841 <br /> Código RUPS: 221",
                },
                {
                    title: "Divanna (CIS)",
                    desc: "Correo: cisdivanna@gmail.com <br /> Teléfono: 96344996 <br /> Código RUPS: 256",
                },
                {
                    title: "3 de Mayo (CIS)",
                    desc: "Correo: cis3demayo@gmail.com lindarosarubio23@gmail.com <br /> Teléfono: 87682860 <br /> Código RUPS: 213",
                },
                {
                    title: "La Cuesta (UAPS)",
                    desc: "Correo: uapscuesta@gmail.com <br /> Teléfono: 95706290 <br /> Código RUPS: 7315",
                },
                {
                    title: "San José de Soroguara (UAPS)",
                    desc: "Correo: uapssanjosedesoroguara@gmail.com <br /> Teléfono: 33359648 <br /> Código RUPS: 272",
                },
            ],
        },
        {
            key: 2,
            label: "RED SANTA FE",
            value: "red-2",
            items: [
                {
                    title: "Centroamérica Oeste (CIS JAPÓN)",
                    desc: "Correo: cisjapon@gmail.com <br /> Teléfono: 32158176 <br /> Código RUPS: 8443",
                },
                {
                    title: "Carrizal (CIS)",
                    desc: "Correo: dabema1964@gmail.com <br /> Teléfono: 98614612 <br /> Código RUPS: 8516",
                },
                {
                    title: "Edén (CIS)",
                    desc: "Correo: ciseledengustavobardales@gmail.com <br /> Teléfono: 33120000 <br /> Código RUPS: 264",
                },
                {
                    title: "San Francisco (CIS)",
                    desc: "Correo: cricardoez@gmail.com <br /> Teléfono: 32507373 <br /> Código RUPS: 230",
                },
                {
                    title: "21 de febrero (CIS)",
                    desc: "Correo: reyesandino_308@hotmail.com <br /> Teléfono: 95185008 <br /> Código RUPS: 81647",
                },
                {
                    title: "Nueva Capital (UAPS)",
                    desc: "Correo: nuevacapitalu@gmail.com <br /> Teléfono: 95055967 <br /> Código RUPS: 85537",
                },
            ],
        },
        {
            key: 3,
            label: "RED VILLA ADELA",
            value: "red-3",
            items: [
                {
                    title: "Concepción de Río Grande (CIS)",
                    desc: "Correo: concepcionriogrande504@gmail.com <br /> Teléfono: 32233513 <br /> Código RUPS: 8532",
                },
                {
                    title: "Flor del Campo (CIS)",
                    desc: "Correo: nidiarosibel@hotmail.com <br /> Teléfono: 99926330 <br /> Código RUPS: 27",
                },
                {
                    title: "Nueva Esperanza (CIS)",
                    desc: "Correo: pinedahectormartin1102@gmail.com <br /> Teléfono: 99769516 <br /> Código RUPS: 82546",
                },
                {
                    title: "Torres (CIS)",
                    desc: "Correo: cistorres1692@yahoo.com <br /> Teléfono: 99185612 <br /> Código RUPS: 8460",
                },
                {
                    title: "Villa Adela (CIS)",
                    desc: "Correo: cisvillaadela@gmail.com <br /> Teléfono: 99899337 <br /> Código RUPS: 60",
                },
                {
                    title: "Cruz Roja (UAPS)",
                    desc: "Correo: mlopez0267@gmail.com <br /> Teléfono: 96010267 <br /> Código RUPS: 80268",
                },
                {
                    title: "Mateo (UAPS)",
                    desc: "Correo: uapsmateo8@gmail.com <br /> Teléfono: 96015595 <br /> Código RUPS: 8478",
                },
                {
                    title: "Santa Rosa (UAPS)",
                    desc: "Correo: uapssantarosa07@gmail.com <br /> Teléfono: 98881730 <br /> Código RUPS: 82091",
                },
                {
                    title: "Tizatillo (UAPS)",
                    desc: "Correo: uapstizatillo@yahoo.com <br /> Teléfono: 88939650 <br /> Código RUPS: 7307",
                },
                {
                    title: "Yaguacire (UAPS)",
                    desc: "Correo: incha89@hotmail.com <br /> Teléfono: 96103048 <br /> Código RUPS: 94",
                },
            ],
        },
        {
            key: 4,
            label: "RED EL SITIO",
            value: "red-4",
            items: [
                {
                    title: "El Manchén (CIS)",
                    desc: "Correo: dmarissaes@hotmail.com <br /> Teléfono: 98095847 <br /> Código RUPS: 132",
                },
                {
                    title: "San Miguel (CIS)",
                    desc: "Correo: cissm1885@gmail.com <br /> Teléfono: 88909604 <br /> Código RUPS: 108",
                },
                {
                    title: "Jutiapa (UAPS)",
                    desc: "Correo: uapsjutiapa@gmail.com <br /> Teléfono: 98831690 <br /> Código RUPS: 167",
                },
                {
                    title: "Piligüin (UAPS)",
                    desc: "Correo: uapspiliguin@gmail.com eveysanz@gmail.com <br /> Teléfono: 33029066 <br /> Código RUPS: 85405",
                },
                {
                    title: "San Juancito (UAPS)",
                    desc: "Correo: uapssanjuancito@gmail.com <br /> Teléfono: 99193091 <br /> Código RUPS: 710",
                },
            ],
        },
        {
            key: 5,
            label: "RED BARRIO ABAJO",
            value: "red-5",
            items: [
                {
                    title: "El Bosque (CIS)",
                    desc: "Correo: meadcarlos@yahoo.com <br /> Teléfono: 99851575 <br /> Código RUPS: 116",
                },
                {
                    title: "El Chile (CIS)",
                    desc: "Correo: chi.salud.rsm@gmail.com <br /> Teléfono: 88261555 <br /> Código RUPS: 124",
                },
                {
                    title: "Brisas del Picacho (UAPS)",
                    desc: "Correo: averruzgiss@gmail.com <br /> Teléfono: 95960245 <br /> Código RUPS: 7391",
                },
                {
                    title: "Carpintero (UAPS)",
                    desc: "Correo: uapscarpintero2023@gmail.com aritacesar16@gmail.com <br /> Teléfono: 99268730 <br /> Código RUPS: 80144",
                },
                {
                    title: "Cofradía (UAPS)",
                    desc: "Correo: alfredogalo91@gmail.com <br /> Teléfono: 88885467 <br /> Código RUPS: 833",
                },
                {
                    title: "La Venta del Norte (UAPS)",
                    desc: "Correo: duronolmeda@gmail.com <br /> Teléfono: 33757925 <br /> Código RUPS: 973",
                },
                {
                    title: "Las Pilas (UAPS)",
                    desc: "Correo: elviaval13@gmail.com <br /> Teléfono: 33676028 <br /> Código RUPS: 10146",
                },
                {
                    title: "Monte Redondo (UAPS)",
                    desc: "Correo: uapsmonteredondo@gmail.com drleonardomoranf@gmail.com <br /> Teléfono: 99632825 <br /> Código RUPS: 175",
                },
                {
                    title: "Río Abajo (UAPS)",
                    desc: "Correo: orusvela1990@yahoo.com <br /> Teléfono: 96361112 <br /> Código RUPS: 80276",
                },
                {
                    title: "Río Hondo (UAPS)",
                    desc: "Correo: jessicanellydacas@gmail.com <br /> Teléfono: 98349897 <br /> Código RUPS: 183",
                },
            ],
        },
        {
            key: 6,
            label: "RED KENNEDY",
            value: "red-6",
            items: [
                {
                    title: "Pedregal (CIS)",
                    desc: "Correo: cispedregal051@yahoo.com <br /> Teléfono: 31556489 <br /> Código RUPS: 51",
                },
                {
                    title: "La Cañada (UAPS)",
                    desc: "Correo: juliosolis3176@gmail.com <br /> Teléfono: 32768732 <br /> Código RUPS: 80136",
                },
                {
                    title: "La Joya (UAPS)",
                    desc: "Correo: ramcasgladys@gmail.com <br /> Teléfono: 32720708 <br /> Código RUPS: 8524",
                },
                {
                    title: "Monterrey (UAPS)",
                    desc: "Correo: zoesanchez211@gmail.com <br /> Teléfono: 99439393 <br /> Código RUPS: 141",
                },
                {
                    title: "Oscar A. Flores (UAPS)",
                    desc: "Correo: uapsoscarflores@gmail.com <br /> Teléfono: 87720877 <br /> Código RUPS: 8494",
                },
                {
                    title: "Solidaridad Honduras (UAPS)",
                    desc: "Correo: freyescalix@gmail.com <br /> Teléfono: 96105074 <br /> Código RUPS: 85235",
                },
            ],
        },
        {
            key: 7,
            label: "RED ALONSO SUAZO",
            value: "red-7",
            items: [
                {
                    title: "Alonso Suazo (Policlínico)",
                    desc: "Correo: alonsosuazo574@gmail.com <br /> Teléfono: 99383204 <br /> Código RUPS: 19",
                },
                {
                    title: "Nueva Suyapa (CIS)",
                    desc: "Correo: nsuyapacis@gmail.com <br /> Teléfono: 98645644 <br /> Código RUPS: 159",
                },
                {
                    title: "San Benito (CIS)",
                    desc: "Correo: c.sanbenitohn@gmail.com <br /> Teléfono: 87719153 <br /> Código RUPS: 35",
                },
                {
                    title: "Villanueva (CIS)",
                    desc: "Correo: cis.villanueva.rsm@gmail.com <br /> Teléfono: 89313742 <br /> Código RUPS: 8541",
                },
                {
                    title: "Ciudad Mujer (CIS)",
                    desc: "Correo: fcalix@ciudadmujer.gob.hn <br /> Teléfono: 88796849 <br /> Código RUPS: 83391",
                },
                {
                    title: "Aguacate (UAPS)",
                    desc: "Correo: uapselaguacate@gmail.com <br /> Teléfono: 98154040 <br /> Código RUPS: 78",
                },
                {
                    title: "La Puerta (UAPS)",
                    desc: "Correo: normaberrios168@gmail.com <br /> Teléfono: 32627906 <br /> Código RUPS: 81744",
                },
                {
                    title: "San Juan del Rancho (UAPS)",
                    desc: "Correo: kelincanales2@gmail.com <br /> Teléfono: 87718815 <br /> Código RUPS: 191",
                },
                {
                    title: "Santa Elena (UAPS)",
                    desc: "Correo: ferflores@gmail.com <br /> Teléfono: 94831814 <br /> Código RUPS: 205",
                },
                {
                    title: "Villa Vieja (UAPS)",
                    desc: "Correo: elizacapri@yahoo.com <br /> Teléfono: 99662441 <br /> Código RUPS: 81655",
                },
                {
                    title: "CODOPA (Clínica)",
                    desc: "Correo: maryfigueroa_u@hotmail.com <br /> Teléfono: 994650145 <br /> Código RUPS: 19003",
                },
            ],
        },
        {
            key: 8,
            label: "RED ZAMBRANO",
            value: "red-8",
            items: [
                {
                    title: "Támara (CIS)",
                    desc: "Correo: oris0506@yahoo.es <br /> Teléfono: 99917994 <br /> Código RUPS: 868",
                },
                {
                    title: "Zambrano (CIS)",
                    desc: "Correo: ciszambrano92@gmail.com <br /> Teléfono: 98989978 <br /> Código RUPS: 876",
                },
                {
                    title: "Ciudad España (UAPS)",
                    desc: "Correo: carolitaumanzor@hotmail.com <br /> Teléfono: 96427385 <br /> Código RUPS: 81609",
                },
                {
                    title: "Divina Providencia (UAPS)",
                    desc: "Correo: divinaprovidenciauaps@gmail.com <br /> Teléfono: 98430595 <br /> Código RUPS: 82015",
                },
                {
                    title: "Las Botijas (UAPS)",
                    desc: "Información no disponible <br /> Código RUPS: 9407",
                },
                {
                    title: "Penitenciaría Nacional de Támara (PNMAS)",
                    desc: "Correo: Montes.asdrubal@yahoo.es <br /> Teléfono: 95103205 <br /> Código RUPS: 8842",
                },
                {
                    title: "PNFAS",
                    desc: "Correo: scarlettmaldonado18@gmail.com <br /> Teléfono: 89772694 <br /> Código RUPS: 80438",
                },
                {
                    title: "Río Frío (UAPS)",
                    desc: "Correo: Sifontes2512@gmail.com <br /> Teléfono: 33373943 <br /> Código RUPS: 9431",
                },
                {
                    title: "San Francisco de Soroguara (UAPS)",
                    desc: "Correo: uaps_sfs_2022@outlook.com <br /> Teléfono: 96025909 <br /> Código RUPS: 850",
                },
                {
                    title: "San Matías (UAPS)",
                    desc: "Correo: uaps.sanmatias@gmail.com <br /> Teléfono: 32633518 <br /> Código RUPS: 841",
                },
                {
                    title: "San Miguel Arcángel (UAPS)",
                    desc: "Correo: eliops22005@gmail.com <br /> Teléfono: 99105499 <br /> Código RUPS: 82066",
                },
                {
                    title: "Villa Porvenir (UAPS)",
                    desc: "Correo: fcbarralagaa@gmail.com <br /> Teléfono: 33050224 <br /> Código RUPS: 80349",
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
                className={`pt-12 pb-12 mx-auto ${
                    isVertical ? "max-w-[95%]" : "max-w-[1100px]"
                }`}
                onChange={handleTabChange}
            >
                <TabsHeader
                    className={`bg-transparent ${
                        isVertical
                            ? "flex-col justify-start items-start w-full max-w-[200px] mr-4"
                            : ""
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
