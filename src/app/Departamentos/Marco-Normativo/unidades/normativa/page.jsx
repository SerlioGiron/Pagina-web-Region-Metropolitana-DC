'use client';
import {DescargasTab} from "@/components/Descargas";
import {NavbarSimple} from "@/components/NavbarMarco";
import {StickyNavbar} from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";

export default function page() {
    const data = [
        {
            label: "Unidad de Verificación de la Normativa Sanitaria",
            value: "normativa-sanitaria",
            cards: [
                {
                    title: "Listado de Establecimientos Proveedores de Servicios de Salud CC",
                    fileURL: "/Unidad de Verificacion de la Normativa Sanitaria/DVMNR-009, V-6, Listado de Establecimientos Proveedores de Servicios de Salud CC.pdf",
                },
                {
                    title: "Listado de Otros Establecimientos CC",
                    fileURL: "/Unidad de Verificacion de la Normativa Sanitaria/DVMNR-010, V-5, Listado de Otros Establecimientos CC.pdf",
                },
                {
                    title: "Listado de Establecimientos para Constancia de Cumplimiento de Medidas Ambientales CC",
                    fileURL: "/Unidad de Verificacion de la Normativa Sanitaria/DVMNR-069, 1era. V., Listado de Establecimientos para Constancia de Cumplimiento de Medidas Ambientales CC.pdf",
                },
            ],
        },
    ];

    return (
        <div>
            <StickyNavbar />
            <NavbarSimple />
            {/* <Typography variant="h1" color="blue-gray" className="text-center my-4">
                Documentos y Protocolos
            </Typography> */}
            <DescargasTab data={data} />
        </div>
    );
}
