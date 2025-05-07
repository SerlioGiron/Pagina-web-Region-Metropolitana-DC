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
                    title: "La Cuesta (UAPS)",
                    desc: "Dirección: Aldea La cuesta, contiguo a aldea Felipe Calix <br /> Teléfono: No tiene <br /> Correo: uapslacuesta@gmail.com",
                },
                {
                    title: "San José de Soroguara (UAPS)",
                    desc: "Dirección: Aldea San José de Soroguara al lado del cementerio <br /> Teléfono: No tiene <br /> Correo: uapssanjosedesoroguara@gmail.com",
                },
                {
                    title: "3 de Mayo (CIS)",
                    desc: "Dirección: Col 3 de mayo calle principal esquina opuesta a instituto Luis Santos Comayagüela <br /> Teléfono: 22236950 <br /> Correo: Cis3mayo@gmail.com",
                },
                {
                    title: "Alemania (CIS)",
                    desc: "Dirección: Col. Alemania 3 cuadras arriba de reciclaje Diamante <br /> Teléfono: No tiene <br /> Correo: alcon2099@gmail.com",
                },
                {
                    title: "Crucitas (CIS)",
                    desc: "Dirección: Barrio las Crucitas, calle principal esquina opuesta panadería Las Crucitas, Comayagüela <br /> Teléfono: 2223-8661 <br /> Correo: cesamolascrucitas@yahoo.es",
                },
                {
                    title: "Divanna (CIS)",
                    desc: "Dirección: Col. Divanna Calle principal contiguo al centro comunal Divanna, Comayagüela <br /> Teléfono: 22273733 <br /> Correo: cisdivanna@gmail.com",
                },
            ],
        },
        {
            key: 2,
            label: "RED SANTA FE",
            value: "red-2",
            items: [
                {
                    title: "Nueva Capital (UAPS)",
                    desc: "Dirección: Col. Nueva Capital, calle principal sector 2, esquina opuesta centro comercial <br /> Teléfono: No tiene <br /> Correo: uapsnuevacapital@hotmail.com",
                },
                {
                    title: "21 de febrero (CIS)",
                    desc: "Dirección: Col. 21 de febrero zona 2 <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Carrizal (CIS)",
                    desc: "Dirección: Col. Centeno No.1 después de iglesia católica Comayagüela <br /> Teléfono: 2201-0300 <br /> Correo: cesamocarrizal@gmail.com",
                },
                {
                    title: "Centroamérica Oeste (CIS JAPÓN)",
                    desc: "Dirección: Col. Centro América Segunda entrada, frente a escuela Rubén Darío Comayagüela <br /> Teléfono: 2227-1816 <br /> Correo: No tiene",
                },
                {
                    title: "Edén (CIS)",
                    desc: "Dirección: Colonia El Edén calle principal frente a escuela Amilar Raudales <br /> Teléfono: No tiene <br /> Correo: ciseldengustavobardales@gmail.com",
                },
                {
                    title: "San Francisco (CIS)",
                    desc: "Dirección: Col. San Francisco, frente al tanque del SANAA, Comayagüela <br /> Teléfono: 22277197 <br /> Correo: cissanfrancisco@gmail.com",
                },
            ],
        },
        {
            key: 3,
            label: "RED VILLA ADELA",
            value: "red-3",
            items: [
                {
                    title: "Cruz Roja (UAPS)",
                    desc: "Dirección: Col. Cruz Roja bloque G, lote 133 frente a escuela Meneca de Mencía Comayagüela <br /> Teléfono: No tiene <br /> Correo: uapscruzroja@gmail.com",
                },
                {
                    title: "Mateo (UAPS)",
                    desc: "Dirección: Aldea Mateo, frente al campo de futbol, Comayagüela <br /> Teléfono: 2229-0020 <br /> Correo: uapsmateo8@gmail.com",
                },
                {
                    title: "Santa Rosa (UAPS)",
                    desc: "Dirección: Aldea Santa Rosa, Manzana 16 casa 14 Comayagüela <br /> Teléfono: No tiene <br /> Correo: uapssantarosa@gmail.com",
                },
                {
                    title: "Tizatillo (UAPS)",
                    desc: "Dirección: Col. Reynel Funez, sector 2 contiguo al orfanato jardín Amigo de los niños <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Yaguacire (UAPS)",
                    desc: "Dirección: Aldea Yaguacire, calle principal contiguo al centro comunal, Comayagüela <br /> Teléfono: No tiene <br /> Correo: Uapsyaguacire94@gmail.com",
                },
                {
                    title: "Concepción de Río Grande (CIS)",
                    desc: "Dirección: Col. Villeda Morales, contiguo a la represa La Concepción <br /> Teléfono: No tiene <br /> Correo: concepcionriogrande@gmail.com",
                },
                {
                    title: "Flor del Campo (CIS)",
                    desc: "Dirección: Col. Flor del Campo contiguo a posta policial <br /> Teléfono: No tiene <br /> Correo: nidiareyes@gmail.com",
                },
                {
                    title: "Nueva Esperanza (CIS)",
                    desc: "Dirección: Col. Nueva Esperanza calle principal al lado de posta policial <br /> Teléfono: 2225-0052 <br /> Correo: cisnuevae@gmail.com",
                },
                {
                    title: "Torres (CIS)",
                    desc: "Dirección: Colonia Las Torres, manzana 19 ,2 cuadras del punto de taxis Comayagüela <br /> Teléfono: No tiene <br /> Correo: Cistorres1892@yahoo.com",
                },
                {
                    title: "Villa Adela (CIS)",
                    desc: "Dirección: Barrio Villa Adela, sexta avenida, 22 y 23 calle Comayagüela <br /> Teléfono: 2225-0658 <br /> Correo: cisvillaadela@gmail.com",
                },
            ],
        },
        {
            key: 4,
            label: "RED EL SITIO",
            value: "red-4",
            items: [
                {
                    title: "Jutiapa (UAPS)",
                    desc: "Dirección: Aldea Matasano contiguo a salón de la asociación campesina <br /> Teléfono: No tiene <br /> Correo: uapsjutiapa@gmail.com",
                },
                {
                    title: "Piligüin (UAPS)",
                    desc: "Dirección: Aldea el Piligüin contiguo a la iglesia católica <br /> Teléfono: No tiene <br /> Correo: uapspiligüin@gmail.com",
                },
                {
                    title: "San Juancito (UAPS)",
                    desc: "Dirección: Aldea Villa de San Juancito, barrio el centro contiguo al salón Kennedy <br /> Teléfono: No tiene <br /> Correo: uapssanjuancito@gmail.com",
                },
                {
                    title: "El Manchen (CIS)",
                    desc: "Dirección: Col. El Manchen contiguo a Posta Policial <br /> Teléfono: 2222-2176 <br /> Correo: Cismanchen.hn.tgu@gmail.com",
                },
                {
                    title: "San Miguel (CIS)",
                    desc: "Dirección: Col. San Miguel calle principal, contiguo a posta de Posta policial <br /> Teléfono: No tiene <br /> Correo: Cissm1885@gmail.com",
                },
            ],
        },
        {
            key: 5,
            label: "RED BARRIO ABAJO",
            value: "red-5",
            items: [
                {
                    title: "Brisas del Picacho (UAPS)",
                    desc: "Dirección: Col. Brisas del Picacho calle principal por el punto de taxis <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Carpintero (UAPS)",
                    desc: "Dirección: Aldea carpintero carretera vieja a Olancho, dos cuadras de la escuela Mariano Folgar <br /> Teléfono: No tiene <br /> Correo: Uapscarpintero2023@gmail.com",
                },
                {
                    title: "Cofradía (UAPS)",
                    desc: "Dirección: Aldea Cofradía km 13 carretera a Olancho contiguo a Centro Renacer <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Las Pilas (UAPS)",
                    desc: "Dirección: Aldea Las Pilas Distrito Central, entrada a Mata de Plátano <br /> Teléfono: No tiene <br /> Correo: laspilasuaps@gmail.com",
                },
                {
                    title: "La Venta del Norte (UAPS)",
                    desc: "Dirección: Aldea Venta del Norte km36 carretera, Olancho <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Monte Redondo (UAPS)",
                    desc: "Dirección: Aldea Monte redondo, carretea a Olancho, frente a escuela José Cecilio del Valle <br /> Teléfono: No tiene <br /> Correo: monteredondo2022@hotmail.com",
                },
                {
                    title: "Río Abajo (UAPS)",
                    desc: "Dirección: Aldea Rio abajo carretera a Olancho km 11 frente a piscinas <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Río Hondo (UAPS)",
                    desc: "Dirección: Aldea Rio Hondo, carretera a Olancho km24 <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "El Bosque (CIS)",
                    desc: "Dirección: Barrio El Bosque, calle principal media cuadra antes del punto de taxis <br /> Teléfono: 2222-1756 <br /> Correo: meadcarlos@yahoo.com",
                },
                {
                    title: "El Chile (CIS)",
                    desc: "Dirección: Barrio abajo, calle Morelos casa 1255, contiguo a farmacia Pavón <br /> Teléfono: 2222-1779 <br /> Correo: ciselchile@yahoo.com",
                },
            ],
        },
        {
            key: 6,
            label: "RED KENNEDY",
            value: "red-6",
            items: [
                {
                    title: "La Cañada (UAPS)",
                    desc: "Dirección: Aldea la cañada, anillo periférico, calle principal frente a DPI <br /> Teléfono: No tiene <br /> Correo: Cisnerzapaz01@gmail.com",
                },
                {
                    title: "La Joya (UAPS)",
                    desc: "Dirección: Col. La Joya al lado del instituto Pineda Gómez <br /> Teléfono: 2230-75-87 <br /> Correo: No tiene",
                },
                {
                    title: "Monterrey (UAPS)",
                    desc: "Dirección: Col. Monterrey, esquina opuesta del instituto Monterrey <br /> Teléfono: No tiene <br /> Correo: Cismonterrey1985@gmail.com",
                },
                {
                    title: "Oscar A. Flores (UAPS)",
                    desc: "Dirección: Col. Oscar A. a la par de kínder Jorge Maradiaga, Comayagüela <br /> Teléfono: 22458326 <br /> Correo: No tiene",
                },
                {
                    title: "Solidaridad Honduras (UAPS)",
                    desc: "Dirección: Col. La Peña sector 5, entrada a la colonia San Isidro, contiguo a iglesia católica <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Pedregal (CIS)",
                    desc: "Dirección: Col Pedregal contiguo a Kínder San José Frente a campo de Futbol <br /> Teléfono: 22467035 <br /> Correo: Ciselpedregal051@yahoo.com",
                },
            ],
        },
        {
            key: 7,
            label: "RED ALONSO SUAZO",
            value: "red-7",
            items: [
                {
                    title: "Aguacate (UAPS)",
                    desc: "Dirección: Aldea Aguacate, montaña de Asacualpa contiguo a escuela Manuel Bonilla <br /> Teléfono: No tiene <br /> Correo: uapselaguacate@gmial.com",
                },
                {
                    title: "La Puerta (UAPS)",
                    desc: "Dirección: Aldea La Puerta km16, montaña Asacualpa, 3 casas de pulpería Patricia <br /> Teléfono: No tiene <br /> Correo: Uaps.lapuerta@gmail.com",
                },
                {
                    title: "San Juan del Rancho (UAPS)",
                    desc: "Dirección: Aldea San Juan del Rancho contiguo a iglesia católica <br /> Teléfono: No tiene <br /> Correo: sanjuandelrancho@gmail.com",
                },
                {
                    title: "Santa Elena (UAPS)",
                    desc: "Dirección: Aldea Santa Elena, Montaña de Asacualpa contiguo a escuela Víctor Lozano <br /> Teléfono: 9874-9869 <br /> Correo: santaelenauaps@gmial.com",
                },
                {
                    title: "Villa Vieja (UAPS)",
                    desc: "Dirección: Aldea Villa Vieja, km 6.5 carretera a Danlí <br /> Teléfono: No tiene <br /> Correo: Villaviejacentrosalud@gmail.com",
                },
                {
                    title: "Alonso Suazo (CIS)",
                    desc: "Dirección: Barrio Morazán, Boulevard Suyapa contiguo al estadio nacional José de la Paz Herrera <br /> Teléfono: No tiene <br /> Correo: alonzosuazo574@gmail.com",
                },
                {
                    title: "Nueva Suyapa (CIS)",
                    desc: "Dirección: Col. Nueva Suyapa sector 1, contiguo a posta policial <br /> Teléfono: No tiene <br /> Correo: nsuyapacis@gmail.com",
                },
                {
                    title: "San Benito (CIS)",
                    desc: "Dirección: Col. Los Pinos, sector B, calle principal <br /> Teléfono: 2291-3916 <br /> Correo: c.sanbenitohn@gmail.com",
                },
                {
                    title: "Villanueva (CIS)",
                    desc: "Dirección: Colonia Villa Nueva sector 6, atrás del Técnico Honduras <br /> Teléfono: 22284891 <br /> Correo: Cisvillanueva.15m@gmail.com",
                },
            ],
        },
        {
            key: 8,
            label: "RED ZAMBRANO",
            value: "red-8",
            items: [
                {
                    title: "Ciudad España (UAPS)",
                    desc: "Dirección: Valle de Amarateca, colonia Ciudad España, contiguo a posta policial, carretera al norte <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Divina Providencia (UAPS)",
                    desc: "Dirección: Valle de Amarateca Col. Divina Providencia <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Las Botijas (UAPS)",
                    desc: "Dirección: Aldea Las Botijas Municipio Villa de San Antonio Comayagua <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Río Frío (UAPS)",
                    desc: "Dirección: Aldea Bonita Valle de Amarateca, entrada principal contiguo a Sol y Arena <br /> Teléfono: No tiene <br /> Correo: riofriouaps@gmail.com",
                },
                {
                    title: "San Francisco de Soroguara (UAPS)",
                    desc: "Dirección: Aldea San Francisco de Soroguara, barrio el Centro, calle principal <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "San Matías (UAPS)",
                    desc: "Dirección: Aldea San Matías, carretera al norte, calle principal <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "San Miguel Arcángel (UAPS)",
                    desc: "Dirección: Co. San Miguel Arcángel Bloque Q casa #1 <br /> Teléfono: No tiene <br /> Correo: uapssanmiguelarcabgel@gmail.com",
                },
                {
                    title: "Villa Porvenir (UAPS)",
                    desc: "Dirección: Col. Villa Porvenir, Amarateca <br /> Teléfono: No tiene <br /> Correo: No tiene",
                },
                {
                    title: "Támara (CIS)",
                    desc: "Dirección: Aldea Tamara Calle Principal <br /> Teléfono: No tiene <br /> Correo: Cistamara2022@gmail.com",
                },
                {
                    title: "Zambrano (CIS)",
                    desc: "Dirección: Aldea zambrano, barrio El Centro contiguo a salón social <br /> Teléfono: No tiene <br /> Correo: Ciszambrano92@gmail.com",
                },
                {
                    title: "Centro Penitenciarío Nacional de Támara (PNMAS)",
                    desc: "Dirección: No disponible <br /> Teléfono: No disponible <br /> Correo: No disponible",
                },
                {
                    title: "Penitenciaria Nacional Femenina de Adaptación Social (PNFAS)",
                    desc: "Dirección: No disponible <br /> Teléfono: No disponible <br /> Correo: No disponible",
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

