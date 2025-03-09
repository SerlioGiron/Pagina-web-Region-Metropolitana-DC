"use client";

import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid";

const units = [
    { name: "Dirección General de Vigilancia del Marco Normativo", link: "/Departamentos/Marco-Normativo" },
    { name: "Dirección General de Normalización", link: "/Departamentos/direccion-general-de-normalizacion" },
    { name: "Unidad de Comunicación Institucional", link: "/Departamentos/unidad-de-comunicacion-institucional" },
    { name: "Unidad de Licitaciones", link: "/Departamentos/unidad-de-licitaciones" },
    { name: "Unidad de Transparencia", link: "/Departamentos/unidad-de-transparencia" },
    { name: "Unidad de Vigilancia de la Salud", link: "/Departamentos/unidad-de-vigilancia-de-la-salud" },
    { name: "Comité de Control Interno Institucional", link: "/Departamentos/comite-de-control-interno-institucional" },
    { name: "Bienes Nacionales", link: "/Departamentos/bienes-nacionales" },
    { name: "Subsecretaría de Redes Integradas de Servicio de Salud", link: "/Departamentos/subsecretaria-de-redes-integradas-de-servicio-de-salud" },
    { name: "Unidad de Gestión de la Información", link: "/Departamentos/unidad-de-gestion-de-la-informacion" },
    { name: "Programa Ampliado de Inmunización PAI", link: "/Departamentos/programa-ampliado-de-inmunizacion-pai" },
    { name: "Unidad Administradora de Fondos de Cooperación Externa UAFCE", link: "/Departamentos/unidad-administradora-de-fondos-de-cooperacion-externa-uafce" },
    { name: "Primer nivel de atención", link: "/Departamentos/primer-nivel-de-atencion" },
    { name: "Unidad de Logística de Medicamentos e Insumos", link: "/Departamentos/unidad-de-logistica-de-medicamentos-e-insumos" },
    { name: "Unidad de Planeamiento y Evaluación de la Gestión", link: "/Departamentos/unidad-de-planeamiento-y-evaluacion-de-la-gestion" },
];

const UnitCard = ({title, link}) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <Card className="shadow-md rounded-xl cursor-pointer" onClick={handleClick}>
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
        <div className=" items-center">
            <StickyNavbar />
            <Typography className="text-2xl font-bold text-gray-800 text-center pt-8">
                Unidades y Direcciones
            </Typography>
            <div className="p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {units.map((unit, index) => (
                    <UnitCard key={index} title={unit.name} link={unit.link}/>
                ))}
            </div>
        </div>
    );
}
