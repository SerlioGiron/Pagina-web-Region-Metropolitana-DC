import { DescargasTab } from "@/components/Descargas";
import {NavbarSimple} from "@/components/NavbarMarco";
import {StickyNavbar} from "@/components/StickyNavbar";

export default function Requisitos() {

    const data = [
        {
            label: "Requisitos Licencia Sanitaria",
            value: "Requisitos",
            cards: [
                {
                    title: "Requisitos de Licencia Sanitaria Nueva y Renovación",
                    fileURL: "/Licencia-Sanitaria/Requisitos Licencia Sanitaria/DVMNR-062, 1era.V., Requisitos de Licencia Sanitaria Nueva y Renovación CC.pdf",
                },
                {
                    title: "Requisitos de Modificación de Licencia Sanitaria",
                    fileURL: "/Licencia-Sanitaria/Requisitos Licencia Sanitaria/DVMNR-063, 1era.V., Requisitos de Modificación de Licencia Sanitaria CC.pdf",
                },
            ],
        },
    ];

    return (
        <div>
            <StickyNavbar />
            <NavbarSimple />
            <DescargasTab data={data} />
        </div>
    )
}