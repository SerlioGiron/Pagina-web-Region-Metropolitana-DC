'use client';
import {DescargasTab} from "@/components/Descargas";
import {NavbarSimple} from "@/components/NavbarMarco";
import {StickyNavbar} from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";

export default function MarcoJuridico() {

    const data = [
        {
            label: "Acuerdos",
            value: "acuerdos",
            cards: [
                {
                    title: "Acuerdo Transitorio de Cuotas de Recuperación",
                    fileURL: "/marco-juridico/acuerdos/Acuerdo Transitorio de Cuotas de Recuperación.pdf",
                },
            ],
        },
        {
            label: "Códigos",
            value: "codigos",
            cards: [
                {
                    title: "Código de Salud 1991, Decreto 65-91",
                    fileURL: "/marco-juridico/codigos/Codigo de Salud 1991, Decreto 65-91.pdf",
                },
            ],
        },
        {
            label: "Reglamentos",
            value: "reglamentos",
            cards: [
                {
                    title: "Reglamento General de Salud Ambiental, Acuerdo No. 0094-1997",
                    fileURL: "/marco-juridico/Reglamentos/Reglamento General de Salud Ambiental Acuerdo No 0094 1997.pdf",
                },
                {
                    title: "Reglamento Manejo Desechos Peligrosos Generados en Establecimientos de Salud",
                    fileURL: "/marco-juridico/Reglamentos/Reglamento Manejo Desechos Peligrosos Generados en Establecimientos de Salud.pdf",
                },
                {
                    title: "Reglamento para el Control Sanitario, Acuerdo No. 06-2005",
                    fileURL: "/marco-juridico/Reglamentos/Reglamento para el Control Sanitario, Acuerdo No. 06-2005.pdf",
                },
                {
                    title: "Reglamento para el Manejo Desechos Peligrosos, Acuerdo No. 07-2008",
                    fileURL: "/marco-juridico/Reglamentos/Reglamento para el Manejo Desechos Peligrosos, Acuerdo No. 07-2008.pdf",
                },
                {
                    title: "Reglamento Técnico de Calidad de Agua Envasada y Hielo para Consumo Humano, Acuerdo No. 614-2007",
                    fileURL: "/marco-juridico/Reglamentos/Reglamento Técnico de Calidad de Agua Envasada y Hielo para Consumo Humano, Acuerdo No. 614-2007.pdf",
                },
            ],
        },
        {
            label: "Leyes",
            value: "leyes",
            cards: [
                {
                    title: "Ley de Procedimiento Administrativo Actualizada Dic. 2015, Decreto No. 152-87",
                    fileURL: "/marco-juridico/Leyes/Ley de Procedimiento Administrativo Actualizada Dic. 2015, Decreto No. 152-87.pdf",
                },
                {
                    title: "Ley de Simplificacion Administrativa, Decreto No. 255-2002",
                    fileURL: "/marco-juridico/Leyes/Ley de Simplificacion Administrativa, Decreto No. 255-2002.pdf",
                },
                {
                    title: "Ley General de la Administración Pública, Decreto No. 146-86",
                    fileURL: "/marco-juridico/Leyes/Ley General de la Administración Pública, Decreto No. 146-86.pdf",
                },
            ],
        },
    ];


    return (
        <div>
            <StickyNavbar />
            <NavbarSimple />
            <Typography variant="h1" color="blue-gray" className="text-center my-4">
                Marco Jurídico
            </Typography>
            <DescargasTab data={data} />
        </div>
    );
}
