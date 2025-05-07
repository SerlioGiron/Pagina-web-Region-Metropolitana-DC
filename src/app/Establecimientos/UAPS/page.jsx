"use client";
import React from "react";
import {Typography, Card, CardBody, CardHeader} from "@material-tailwind/react";
import {StickyNavbar} from "@/components/StickyNavbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import {NavbarSimple} from "@/components/NavbarMarco";
import {
    UserGroupIcon,
    ClockIcon,
    HeartIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function UAPS() {
    const servicios = [
        {
            titulo: "Medicina general",
            icon: HeartIcon,
        },
        {
            titulo: "Promoción de la Salud y Prevención de riesgos y enfermedades",
            icon: UserGroupIcon,
        },
        {
            titulo: "Visita y Atención domiciliaria",
            icon: HeartIcon,
        },
        {
            titulo: "Rehabilitación con Base Comunitaria",
            icon: WrenchScrewdriverIcon,
        },
        {
            titulo: "Vacunación",
            icon: HeartIcon,
        },
        {
            titulo: "Terapia Respiratoria (Nebulización)",
            icon: HeartIcon,
        },
        {
            titulo: "Terapia de rehidratación Oral",
            icon: HeartIcon,
        },
        {
            titulo: "Toma de muestras para diagnóstico temprano",
            icon: WrenchScrewdriverIcon,
        },
        {
            titulo: "Dispensación de medicamentos",
            icon: HeartIcon,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <StickyNavbar />

            <div className="container mx-auto px-4 py-8">
                {/* Encabezado principal */}
                <div className="mb-10 text-center">
                    <Typography
                        variant="h1"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4"
                    >
                        Servicios de Salud UAPS
                    </Typography>

                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Información general */}
                <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">

                    <Typography
                        variant="h3"
                        className="text-xl font-semibold text-blue-800 mb-4"
                    >
                        Categoría Ambulatorio del Primer Nivel de Atención con
                        Escalón de Complejidad 1.
                    </Typography>

                    <Typography
                        variant="h4"
                        className="text-lg font-semibold text-blue-700 mb-4"
                    >
                        UNIDAD DE ATENCION PRIMARIA DE SALUD (UAPS)
                    </Typography>

                    <Typography className="text-gray-700 mb-4">
                        Establecimiento de salud, del Primer Nivel de Atención,
                        de Complejidad 1, ambulatorio.
                    </Typography>

                    <Typography className="text-gray-700 mb-4">
                        Su horario es de 8 horas, con servicios integrales de
                        medicina general, con énfasis en la promoción y
                        protección de la salud, prevención, atención y control
                        de enfermedades, riesgos y daños a la salud de menor
                        severidad, y de rehabilitación basada en la comunidad.
                    </Typography>

                    <Typography className="text-gray-700 mb-4">
                        Fomenta la participacion de la comunidad, mantiene
                        contacto directo y permanente con autoridades locales.
                        Agentes intersectoriales, organizaciones comunitarias
                        vinculadas o no al sector salud, y con los Agentes
                        Comunitarios de Salud, en el marco de la APS.
                    </Typography>

                    <Typography className="text-gray-700 mb-4">
                        Todo el personal del Establecimiento de Salud es el
                        Equipo de Salud Familiar, responsable del cuidado de la
                        salud de las familias asignadas bajo su responsabilidad.
                    </Typography>

                    <Typography className="text-gray-700">
                        Este funcionará de acuerdo a los lineamientos
                        establecidos por la SESAL
                    </Typography>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {servicios.map((servicio, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardHeader
                                floated={false}
                                className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                            >
                                <servicio.icon className="w-10 h-10 text-white" />
                            </CardHeader>
                            <CardBody className="p-6">
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-3 font-semibold"
                                >
                                    {servicio.titulo}
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            <FooterWithSocialLinks />
        </div>
    );
}
