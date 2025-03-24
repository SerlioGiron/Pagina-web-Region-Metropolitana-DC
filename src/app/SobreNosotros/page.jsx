"use client";
import {Noticias} from "../../components/Noticias";
import {CarouselDefault} from "../../components/Carousel";
import {StickyNavbar} from "../../components/StickyNavbar";
import {FooterWithSocialLinks} from "../../components/Footer";
import {Galeria} from "../../components/Galeria";

import {Card, CardBody, Typography} from "@material-tailwind/react";
import {GlobeAltIcon, LightBulbIcon} from "@heroicons/react/24/solid";

const Mision = () => {
    return (
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-blue-50">
            <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                    <GlobeAltIcon className="w-12 h-12 text-blue-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2"
                >
                    Misión
                </Typography>
                <Typography className="text-gray-600">
                    Somos la Región Sanitaria Metropolitana del Distrito
                    Central, responsable de ejecutar, controlar, dar seguimiento
                    y evaluar según normas, planes y programas nacionales de
                    salud: ejerciendo la rectoría de todos los Establecimientos
                    proveedores de servicios de Salud dentro del Distrito
                    Central; dedicada a orientar, promover, conducir y regular
                    la construcción de entornos saludables haciendo un uso
                    eficiente de los recursos asignados, garantizando la
                    seguridad, calidad de bienes, servicios de interés sanitario
                    y la intervención sobre riesgos y daños colectivos a la
                    Salud, ejecutando las políticas en atención a las
                    necesidades y demandas de salud con un enfoque prioritario
                    en fortalecer el Primer Nivel de Atención con coordinaciones
                    interinstitucional.
                </Typography>
            </CardBody>
        </Card>
    );
};

const Vision = () => {
    return (
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-green-50">
            <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                    <LightBulbIcon className="w-12 h-12 text-green-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2"
                >
                    Visión
                </Typography>
                <Typography className="text-gray-600">
                    Ser una Región Sanitaria que garantiza las condiciones
                    favorables para la Salud de la población que habita en el
                    Municipio del Distrito Central, mediante la construcción
                    colectiva y la conducción apropiada de un Sistema de Salud
                    plural e integrado debidamente regulado, centrado en la
                    atención primaria en salud, abordando de forma integral a la
                    persona, familia y comunidad, con enfoque participativo e
                    intersectorial, equidad, acceso universal en la cobertura,
                    calidez, oportunidad, eficacia y eficiencia en la prestación
                    de servicios con altos niveles de calidad.
                </Typography>
            </CardBody>
        </Card>
    );
};

export default function Region() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <CarouselDefault />
            <div className="flex flex-col md:flex-row gap-8 p-8 items-center justify-center">
                <Mision />
                <Vision />
            </div>
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <img
                    src="/assets/organigrama_page-0001.jpg"
                    alt="Organigrama"
                    className="w-full max-w-4xl object-contain"
                />
            </div>
            <FooterWithSocialLinks />
        </div>
    );
}
