
import { DescargasTab } from "@/components/Descargas";
import { NavbarSimple } from "@/components/NavbarMarco";
import { StickyNavbar } from "@/components/StickyNavbar";
export default function Estandares() {

    const data = [
        {
            label: "Estándares Mínimos de Organización y Funcionamiento",
            value: "Requisitos",
            cards: [
                {
                    title: "Código de Salud",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Código de Salud.pdf",
                },
                {
                    title: "Libro Guía de Vigilancia de Enfermedades",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Libro Guía de Vigilancia de Enfermedades.pdf",
                },
                {
                    title: "Norma Nacional de Bioseguridad",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Norma Nacional de Bioseguridad.pdf",
                },
                {
                    title: "Protocolo bioseguridad odontológica ante la presencia del SARS COV-2 COVID-19",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Protocolo bioseguridad odontológica ante la presencia del SARS COV-2 (COVID-19) SESAL.pdf",
                },
                {
                    title: "Reglamento para el manejo integral de los residuos sólidos",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Reglamento para el manejo integral de los residuos sólidos.pdf",
                },
                {
                    title: "Reglamento Residuos Hospitalarios",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Reglamento Residuos Hospitalarios.pdf",
                },
                {
                    title: "Reglamento Vigilancia Epidemiológica",
                    fileURL: "/Licencia-Sanitaria/Estándares Mínimos de Organización y Funcionamiento/Reglamento Vigilancia Epidemiológica.pdf",
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