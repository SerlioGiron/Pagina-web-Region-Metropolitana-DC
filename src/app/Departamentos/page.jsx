"use client";

import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid";

const units = [
    "Dirección General de Vigilancia del Marco Normativo",
    "Dirección General de Normalización",
    "Unidad de Comunicación Institucional",
    "Unidad de Licitaciones",
    "Unidad de Transparencia",
    "Unidad de Vigilancia de la Salud",
    "Comité de Control Interno Institucional",
    "Bienes Nacionales",
    "Subsecretaría de Redes Integradas de Servicio de Salud",
    "Unidad de Gestión de la Información",
    "Programa Ampliado de Inmunización PAI",
    "Unidad Administradora de Fondos de Cooperación Externa UAFCE",
    "Primer nivel de atención",
    "Unidad de Logística de Medicamentos e Insumos",
    "Unidad de Planeamiento y Evaluación de la Gestión",
];

const UnitCard = ({title}) => {
    return (
        <Card className="shadow-md rounded-xl">
            <CardBody className="flex items-center space-x-4 p-4">
                <div className="bg-blue-100 p-3 rounded-full">
                    <BuildingOfficeIcon className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            </CardBody>
        </Card>
    );
};

export default function Departamentos() {
    return (
        <div className="container mx-auto items-center">
            <StickyNavbar />
            <Typography className="text-2xl font-bold text-gray-800 text-center pt-8">
                Unidades y Direcciones
            </Typography>
            <div className="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {units.map((unit, index) => (
                    <UnitCard key={index} title={unit} />
                ))}
            </div>
        </div>
    );
}
