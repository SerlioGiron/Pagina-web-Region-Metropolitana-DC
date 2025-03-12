"use client";

import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid";

const units = [
    { name: "Jefatura Regional", link: "/Departamentos/jefatura-regional" },
    { name: "Unidad de Planeamiento", link: "/Departamentos/unidad-de-planeamiento" },
    { name: "Unidad de Vigilancia de la Salud", link: "/Departamentos/unidad-de-vigilancia-de-la-salud" },
    { name: "Unidad de Servicios Legales", link: "/Departamentos/unidad-de-servicios-legales" },
    { name: "Unidad de Gestión y Desarrollo de los Recursos Humanos", link: "/Departamentos/unidad-de-gestion-y-desarrollo-de-los-recursos-humanos" },
    { name: "Unidad de Comunicación Social", link: "/Departamentos/unidad-de-comunicacion-social" },
    { name: "Departamento de Vigilancia del Marco Normativo", link: "/Departamentos/Marco-Normativo" },
    { name: "Departamento de Redes Integradas de Servicios de Salud", link: "/Departamentos/departamento-de-redes-integradas-de-servicios-de-salud" },
    { name: "Departamento de Administración", link: "/Departamentos/departamento-de-administracion" },
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
