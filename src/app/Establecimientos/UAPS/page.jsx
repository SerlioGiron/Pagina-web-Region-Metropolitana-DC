'use client';
import React from "react";
import {Typography, Card, CardBody, CardHeader} from "@material-tailwind/react";
import {StickyNavbar} from "@/components/StickyNavbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import { NavbarSimple } from "@/components/NavbarMarco";
import {
    UserGroupIcon,
    ClockIcon,
    HeartIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function UAPS() {
    const uapsInfo = {
        name: "Unidad de Atención Primaria de Salud (UAPS)",
        descripcion: "Establecimiento de salud, del Primer Nivel de Atención, de Complejidad 1, ambulatorio. Su horario es de 8 horas, con servicios integrales de medicina general, con énfasis en la promoción y protección de la salud, prevención, atención y control de enfermedades, riesgos y daños a la salud de menor severidad, y de rehabilitación basada en la comunidad.",
        caracteristicas: [
            {
                titulo: "Participación Comunitaria",
                descripcion: "Fomenta la participacion de la comunidad, mantiene contacto directo y permanente con autoridades locales. Agentes intersectoriales, organizaciones comunitarias vinculadas o no al sector salud, y con los Agentes Comunitarios de Salud, en el marco de la APS.",
                icon: UserGroupIcon,
            },
            {
                titulo: "Equipo de Salud Familiar",
                descripcion: "Todo el personal del Establecimiento de Salud es el Equipo de Salud Familiar, responsable del cuidado de la salud de las familias asignadas bajo su responsabilidad.",
                icon: HeartIcon,
            },
            {
                titulo: "Horario de Atención",
                descripcion: "Funciona 8 horas diarias, de acuerdo a los lineamientos establecidos por la SESAL.",
                icon: ClockIcon,
            },
        ],
        recursosHumanos: {
            titulo: "Recursos Humanos",
            personal: [
                "Médico (a) General",
                "Auxiliar de enfermería",
                "Un promotor (a) de Salud por cada 300 familias"
            ]
        },
        servicios: {
            titulo: "Servicios Ofrecidos",
            lista: [
                "Medicina general",
                "Promoción de la Salud y Prevención de riesgos y enfermedades",
                "Visita y Atención domiciliaria",
                "Rehabilitación con Base Comunitaria",
                "Vacunación",
                "Terapia Respiratoria (Nebulización)",
                "Terapia de rehidratación Oral",
                "Toma de muestras para diagnóstico temprano (Pruebas rápidas, Pruebas de esputo y otras)",
                "Dispensación de medicamentos"
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <StickyNavbar />
            <NavbarSimple />

            <div className="container mx-auto px-4 py-8">
                {/* Encabezado principal */}
                <div className="mb-10 text-center">
                    <Typography
                        variant="h1"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4"
                    >
                        {uapsInfo.name}
                    </Typography>

                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Descripción principal */}
                <Card className="mb-12 overflow-hidden shadow-lg">
                    <CardBody className="p-6 md:p-8">
                        <Typography className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {uapsInfo.descripcion}
                        </Typography>
                    </CardBody>
                </Card>

                {/* Características principales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {uapsInfo.caracteristicas.map((caracteristica, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                            <CardHeader
                                floated={false}
                                className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                            >
                                <caracteristica.icon className="w-10 h-10 text-white" />
                            </CardHeader>
                            <CardBody className="p-6">
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-3 font-semibold"
                                >
                                    {caracteristica.titulo}
                                </Typography>
                                <Typography className="text-gray-600">
                                    {caracteristica.descripcion}
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                {/* Recursos Humanos */}
                <Card className="mb-12 overflow-hidden shadow-lg">
                    <CardHeader
                        floated={false}
                        className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                    >
                        <Typography variant="h4" className="text-white">
                            {uapsInfo.recursosHumanos.titulo}
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-6">
                        <ul className="list-disc pl-5 space-y-2">
                            {uapsInfo.recursosHumanos.personal.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>

                {/* Servicios */}
                <Card className="mb-12 overflow-hidden shadow-lg">
                    <CardHeader
                        floated={false}
                        className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                    >
                        <Typography variant="h4" className="text-white">
                            {uapsInfo.servicios.titulo}
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-6">
                        <ul className="list-disc pl-5 space-y-2">
                            {uapsInfo.servicios.lista.map((servicio, index) => (
                                <li key={index} className="text-gray-700 ">
                                    {servicio}
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            </div>

            <FooterWithSocialLinks />
        </div>
    );
}
