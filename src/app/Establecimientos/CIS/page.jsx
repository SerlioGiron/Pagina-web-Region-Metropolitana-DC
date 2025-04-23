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

export default function CIS() {
    const servicios = [
        {
            titulo: "Medicina General",
            descripcion: "Atención médica integral para pacientes de todas las edades, enfocada en el diagnóstico, tratamiento y seguimiento de condiciones de salud generales.",
            icon: HeartIcon,
        },
        {
            titulo: "Promoción de la Salud y Prevención",
            descripcion: "Programas y actividades enfocados en promover estilos de vida saludables y prevenir enfermedades a través de educación y acciones comunitarias.",
            icon: UserGroupIcon,
        },
        {
            titulo: "Visita y Atención Domiciliaria",
            descripcion: "Servicio de atención médica y de enfermería en el hogar del paciente, especialmente para aquellos con dificultades de movilidad.",
            icon: HeartIcon,
        },
        {
            titulo: "Rehabilitación con Base Comunitaria",
            descripcion: "Programas de rehabilitación física y terapéutica integrados en la comunidad, facilitando la recuperación y reintegración social.",
            icon: WrenchScrewdriverIcon,
        },
        {
            titulo: "Vacunación",
            descripcion: "Programa de inmunización para prevenir enfermedades infecciosas, siguiendo el esquema nacional de vacunación.",
            icon: HeartIcon,
        },
        {
            titulo: "Terapia Respiratoria",
            descripcion: "Servicio de nebulización y tratamiento para condiciones respiratorias, incluyendo asma y otras enfermedades pulmonares.",
            icon: HeartIcon,
        },
        {
            titulo: "Terapia de Rehidratación Oral",
            descripcion: "Tratamiento para la deshidratación, especialmente en casos de diarrea y vómitos, utilizando soluciones de rehidratación oral.",
            icon: HeartIcon,
        },
        {
            titulo: "Dispensación de Medicamentos",
            descripcion: "Servicio de entrega de medicamentos recetados, asegurando el acceso a tratamientos farmacológicos necesarios.",
            icon: HeartIcon,
        },
        {
            titulo: "Odontología General",
            descripcion: "Atención dental integral, incluyendo prevención, diagnóstico y tratamiento de condiciones bucales.",
            icon: HeartIcon,
        },
        {
            titulo: "Laboratorio Clínico I",
            descripcion: "Servicios básicos de laboratorio para diagnóstico, incluyendo análisis de sangre, orina y otras pruebas clínicas.",
            icon: WrenchScrewdriverIcon,
        },
        {
            titulo: "Atención de Partos de Bajo Riesgo",
            descripcion: "Atención especializada para partos normales y de bajo riesgo, con personal capacitado y equipamiento necesario.",
            icon: HeartIcon,
        },
        {
            titulo: "Transporte de Pacientes",
            descripcion: "Servicio de transporte para pacientes que requieren traslado a otros centros de salud, especialmente en casos de emergencia.",
            icon: ClockIcon,
        }
    ];

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
                        Servicios de Salud CIS
                    </Typography>

                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {servicios.map((servicio, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
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
                                <Typography className="text-gray-600">
                                    {servicio.descripcion}
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
