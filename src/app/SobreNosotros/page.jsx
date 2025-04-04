"use client";
import {Noticias} from "../../components/Noticias";
import {CarouselDefault} from "../../components/Carousel";
import {StickyNavbar} from "../../components/StickyNavbar";
import {FooterWithSocialLinks} from "../../components/Footer";
import {Galeria} from "../../components/Galeria";

import {Card, CardBody, Typography} from "@material-tailwind/react";
import {
    GlobeAltIcon,
    LightBulbIcon,
    ChartBarIcon,
    HeartIcon,
    BuildingLibraryIcon,
    AcademicCapIcon, // Reemplazo para TargetIcon
} from "@heroicons/react/24/outline";

// Componente para el Objetivo General
const ObjetivoGeneral = () => {
    return (
        <Card className="shadow-lg rounded-xl w-full bg-[#68c5d7] bg-opacity-10">
            <CardBody className="p-6 text-justify">
                <div className="flex justify-center mb-4">
                    <AcademicCapIcon className="w-12 h-12 text-purple-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2 text-center"
                >
                    Objetivo General
                </Typography>
                <Typography className="text-gray-600">
                    Fortalecer la salud de la población de la Región Sanitaria
                    Metropolitana del Distrito Central mediante la
                    implementación de estrategias integrales que mejoren la
                    atención en salud materno-infantil, el control de
                    enfermedades transmisibles y no transmisibles, y promuevan
                    intervenciones a lo largo del curso de vida.
                </Typography>
            </CardBody>
        </Card>
    );
};

// Componente para los Objetivos Específicos
const ObjetivosEspecificos = () => {
    const objetivos = [
        {
            icon: <ChartBarIcon className="w-8 h-8 text-blue-500" />,
            title: "Fortalecer el rol rector",
            content:
                "Fortalecer el rol rector de la Región Sanitaria Metropolitana del Distrito Central para proteger y mejorar la salud de la población, garantizando una coordinación efectiva con los establecimientos de salud y promoviendo políticas públicas inclusivas.",
        },
        {
            icon: <HeartIcon className="w-8 h-8 text-red-500" />,
            title: "Implementar sistema integral",
            content:
                "Implementar un sistema integral de atención en salud que garantice el acceso a servicios de calidad para mujeres embarazadas y niños menores de cinco años, y establecer un control efectivo de enfermedades prioritarias, con el objetivo de reducir la morbimortalidad en la Región Sanitaria Metropolitana del Distrito Central.",
        },
        {
            icon: <GlobeAltIcon className="w-8 h-8 text-green-500" />,
            title: "Desarrollar estrategias de promoción",
            content:
                "Desarrollar e implementar estrategias de promoción de la salud que aborden la educación y prevención en salud materno-infantil, enfermedades transmisibles y no transmisibles, así como la salud mental, bucal y ocular, para empoderar a la población del distrito central.",
        },
        {
            icon: <BuildingLibraryIcon className="w-8 h-8 text-amber-500" />,
            title: "Gestionar mejoras de infraestructura",
            content:
                "Desarrollar procesos de gestión internas y externas para compra de inmueble y mejoras de infraestructura en la Región Metropolitana del Distrito Central y sus diferentes establecimientos de salud que se ajusten a las necesidades de acuerdo a los servicios que se prestan a la población.",
        },
    ];

    return (
        <Card className="shadow-lg rounded-xl w-full mt-8 bg-[#68c5d7] bg-opacity-10">
            <CardBody className="p-6">
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-6 text-center"
                >
                    Objetivos Específicos
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {objetivos.map((objetivo, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-3">
                                <div className="bg-gray-100 p-2 rounded-full mr-3">
                                    {objetivo.icon}
                                </div>
                                <Typography
                                    variant="h6"
                                    className="font-medium text-gray-800"
                                >
                                    {objetivo.title}
                                </Typography>
                            </div>
                            <Typography className="text-gray-600 text-sm text-justify">
                                {objetivo.content}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

// Sección de Objetivos que combina los componentes anteriores
const SeccionObjetivos = () => {
    return (
        <div className="px-8 py-12 bg-gray-50">
            <Typography
                variant="h3"
                className="font-bold text-gray-800 mb-8 text-center"
            >
                Nuestros Objetivos
            </Typography>
            <ObjetivoGeneral />
            <ObjetivosEspecificos />
        </div>
    );
};

const Mision = () => {
    return (
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-[#68c5d7] bg-opacity-10">
            <CardBody className="p-6 text-justify">
                <div className="flex justify-center mb-4">
                    <GlobeAltIcon className="w-12 h-12 text-blue-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2 text-center"
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
        <Card className="shadow-lg rounded-xl md:w-1/2 bg-[#68c5d7] bg-opacity-10 ">
            <CardBody className="p-6 text-justify">
                <div className="flex justify-center mb-4">
                    <LightBulbIcon className="w-12 h-12 text-green-600" />
                </div>
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 mb-2 text-center"
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
            <div className="flex flex-col md:flex-row gap-8 p-8 items-stretch justify-center">
                <Mision />
                <Vision />
            </div>
            <SeccionObjetivos />
            <div className="flex justify-center flex-col items-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
                <Typography
                    variant="h3"
                    className="font-bold text-gray-800 mb-8 text-center relative"
                >
                    Organigrama
                </Typography>
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
