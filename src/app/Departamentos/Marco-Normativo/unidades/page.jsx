'use client';
import React from "react";
import {Typography, Card, CardBody, CardHeader, Button} from "@material-tailwind/react";
import {StickyNavbar} from "@/components/StickyNavbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import {
    BookOpenIcon,
    ShieldCheckIcon,
    AcademicCapIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavbarSimple } from "@/components/NavbarMarco";
import Link from "next/link";

export default function Page() {
    const unidadesInfo = {
        name: "Departamento de Vigilancia del Marco Normativo",
        tipo: "Unidades",
        descripcion:
            "El Departamento de Vigilancia del Marco Normativo es una instancia de nivel de dirección operativa. Es la responsable de aplicar y garantizar el cumplimiento de la normativa sanitaria y normativa de atención a las personas definida por el nivel central de la Secretaría de Salud. \n\nFiscaliza y controla a todas las personas físicas o jurídicas que realizan actividades que puedan afectar la salud de la población o provocar daños al ambiente en la Región Sanitaria.",
        subsecciones: [
            {
                nombre: "Unidad de Verificación de la Normativa de Atención a las Personas",
                descripcion:
                    "La Unidad de Verificación de la Normativa de Atención a las Personas está adscrita al Departamento de Vigilancia del Marco Normativo. Es la responsable de aplicar y garantizar el cumplimiento de la normativa de atención a las personas definida por el nivel central de la Secretaría de Salud.",
                icon: BookOpenIcon,
            },
            {
                nombre: "Unidad de Verificación de la Normativa Sanitaria",
                descripcion:
                    "La Unidad de Verificación de la Normativa Sanitaria está adscrita al Departamento de Vigilancia del Marco Normativo. Es la responsable de aplicar y garantizar el cumplimiento de la normativa sanitaria.",
                icon: ShieldCheckIcon,
            },
            {
                nombre: "Unidad de Fomento Sanitario",
                descripcion:
                    "La Unidad de Fomento Sanitario es una instancia de nivel de dirección operativa. Es la responsable de brindar la capacitación técnica sobre la normativa de atención a las personas y cualquier otra normativa sanitaria, y de brindar información sobre la normativa sanitaria a quien corresponda.",
                icon: AcademicCapIcon,
            },
            {
                nombre: "Unidad de Atención al Cliente",
                descripcion:
                    "La Unidad de Atención al Cliente está adscrita al Departamento de Vigilancia del Marco Normativo. Es la responsable de facilitar y desarrollar los procesos para brindar atención al cliente en los diferentes trámites relacionados con licenciamiento de establecimientos y denuncias sanitarias relacionadas, canalizándolas a la instancia que corresponda para ser procesada y resuelta de conformidad.",
                icon: UserGroupIcon,
            }
        ],
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
                        {unidadesInfo.name}
                    </Typography>

                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Descripción principal */}
                <Card className="mb-12 overflow-hidden shadow-lg">
                    <CardBody className="p-6 md:p-8">
                        <Typography className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {unidadesInfo.descripcion}
                        </Typography>
                    </CardBody>
                </Card>

                {/* Título de sección */}
                <Typography
                    variant="h2"
                    className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
                >
                    Nuestras Unidades
                </Typography>

                {/* Tarjetas de unidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                    {unidadesInfo.subsecciones.map((unidad, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                        >
                            <CardHeader
                                floated={false}
                                className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
                            >
                                <unidad.icon className="w-10 h-10 text-white" />
                            </CardHeader>
                            <CardBody className="p-6 flex flex-col flex-grow">
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-3 font-semibold"
                                >
                                    {unidad.nombre}
                                </Typography>
                                <Typography className="text-gray-600 mb-4 flex-grow">
                                    {unidad.descripcion}
                                </Typography>
                                {(index === 0 || index === 1) && (
                                    <Link href={index === 0 ? "/Departamentos/Marco-Normativo/unidades/documentos" : "/Departamentos/Marco-Normativo/unidades/normativa"}>
                                        <Button
                                            variant="gradient"
                                            color="blue"
                                            className="mt-auto w-full"
                                        >
                                            Ver más información
                                        </Button>
                                    </Link>
                                )}
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            <FooterWithSocialLinks />
        </div>
    );
}
