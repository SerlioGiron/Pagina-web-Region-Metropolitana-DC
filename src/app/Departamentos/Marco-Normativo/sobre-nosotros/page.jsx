"use client";
import {StickyNavbar} from "@/components/StickyNavbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import {NavbarSimple} from "@/components/NavbarMarco";
import {Typography, Card, CardBody, CardHeader} from "@material-tailwind/react";
import {BookOpenIcon, EyeIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Page() {
    const valores = [
        "Responsabilidad",
        "Respeto",
        "Honestidad",
        "Liderazgo",
        "Compromiso",
        "Integridad",
        "Eficacia",
        "Eficiencia",
        "Ética",
        "Equidad",
        "Calidad de Servicio",
        "Transparencia",
        "Trabajo en Equipo",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <StickyNavbar />
            <NavbarSimple />
            <div className="container mx-auto px-4 py-8">
                {/* Organigrama section */}
                <div className="mb-10 text-center">
                    <Typography
                        variant="h2"
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
                    >
                        Organigrama del Departamento de Vigilancia del Marco Normativo
                    </Typography>
                    <div className="flex justify-center">
                        <img
                            src="/assets/organigrama-marco.jpg"
                            alt="Organigrama del Departamento de Vigilancia del Marco Normativo"
                            className="max-w-full h-auto shadow-lg rounded-lg mb-12"
                        />
                    </div>
                </div>

                {/* Misión section */}
                <div className="mb-12">
                    <Typography
                        variant="h2"
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
                    >
                        Misión
                    </Typography>
                    <Card className="overflow-hidden shadow-lg">
                        <CardHeader
                            floated={false}
                            className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                        >
                            <BookOpenIcon className="w-10 h-10 text-white" />
                        </CardHeader>
                        <CardBody className="p-6 md:p-8">
                            <Typography className="text-gray-700 leading-relaxed text-center">
                                Somos una dependencia de la Región Metropolitana
                                del Distrito Central responsable de aplicar,
                                vigilar, socializar y garantizar el cumplimiento
                                de la normativa sanitaria y normativa de
                                atención a las personas; para fiscalizar y
                                controlar todas las actividades que realizan las
                                personas naturales o jurídicas, relacionadas con
                                los establecimientos proveedores de servicios de
                                salud y otros públicos y privados, así como, los
                                procesos de atención en salud, salud ambiental,
                                salud ocupacional y personal de salud; con el
                                fin primordial de proteger la salud de la
                                población
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                {/* Visión section */}
                <div className="mb-12">
                    <Typography
                        variant="h2"
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
                    >
                        Visión
                    </Typography>
                    <Card className="overflow-hidden shadow-lg">
                        <CardHeader
                            floated={false}
                            className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                        >
                            <EyeIcon className="w-10 h-10 text-white" />
                        </CardHeader>
                        <CardBody className="p-6 md:p-8">
                            <Typography className="text-gray-700 leading-relaxed text-center">
                                Ser el Departamento de Vigilancia del Marco
                                Normativo Regional líder a nivel nacional,
                                reconocido por la implementación, cumplimiento y
                                actualización constante del marco regulatorio,
                                centrando nuestros esfuerzos en fortalecer la
                                mejora continua de los procesos para beneficio
                                de la población.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                {/* Valores section */}
                <div className="mb-12">
                    <Typography
                        variant="h2"
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
                    >
                        Valores
                    </Typography>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {valores.map((valor, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <CardBody className="p-4">
                                    <Typography className="text-gray-700 text-center font-medium">
                                        {valor}
                                    </Typography>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <FooterWithSocialLinks />
        </div>
    );
}
