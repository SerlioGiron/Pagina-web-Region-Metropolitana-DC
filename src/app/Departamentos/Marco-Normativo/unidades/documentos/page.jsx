'use client';
import {DescargasTab} from "@/components/Descargas";
import {NavbarSimple} from "@/components/NavbarMarco";
import {StickyNavbar} from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";

export default function Documentos() {
    const data = [
        {
            label: "Hipertensión arterial",
            value: "hipertension",
            cards: [
                {
                    title: "Protocolo de Atencion Clinica para la Prevencion Dianostico y Tratamiento de Hpwrtension Arterial Esencial en el 1er Nivel de Atencion",
                    fileURL: "/Normas y Protocolos por Componente/Hipertensión arterial/Protocolo-Hipertension-Arterial.pdf",
                },
            ],
        },
        {
            label: "Diabetes",
            value: "diabetes",
            cards: [
                {
                    title: "PAC DMT2",
                    fileURL: "/Normas y Protocolos por Componente/Diabetes/PAC DMT2.pdf",
                },
            ],
        },
        {
            label: "VIH",
            value: "vih",
            cards: [
                {
                    title: "GUIA PARA PROVEER EL SERVICIO DE CONSEJERIA EN VIH BASADA EN RIESGO",
                    fileURL: "/Normas y Protocolos por Componente/VIH/GUIA PARA PROVEER EL SERVICIO DE CONSEJERIA EN VIH BASADA EN RIESGO.pdf",
                },
                {
                    title: "Guia para Proveer el Servicio de Consejería en VIH",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Guia para Proveer el Servicio de Consejería en VIH.pdf",
                },
                {
                    title: "LINEAM-ProfilaxisPEVIH",
                    fileURL: "/Normas y Protocolos por Componente/VIH/LINEAM-ProfilaxisPEVIH.PDF",
                },
                {
                    title: "LINEAMIENTOS DE PRESTACION SERVICIOS DIFERENCIADOS",
                    fileURL: "/Normas y Protocolos por Componente/VIH/LINEAMIENTOS DE PRESTACION SERVICIOS DIFERENCIADOS.pdf",
                },
                {
                    title: "LINEAMIENTOS PARA LA IMPLEMENTACIÓN DE LA AUTOPRUEBA EN LA DETECCIÓN DE LA INFECCIÓN POR EL VIRUS DE LA INMUNODEFICIENCIA HUMANA",
                    fileURL: "/Normas y Protocolos por Componente/VIH/LINEAMIENTOS PARA LA IMPLEMENTACIÓN DE LA AUTOPRUEBA EN LA DETECCIÓN DE LA INFECCIÓN POR EL VIRUS DE LA INMUNODEFICIENCIA HUMANA.pdf",
                },
                {
                    title: "LINEAMIENTOS VICITS 22 agosto FINAL",
                    fileURL: "/Normas y Protocolos por Componente/VIH/LINEAMIENTOS VICITS 22 agosto FINAL.pdf",
                },
                {
                    title: "Linemamientos_Certificación_S.Pruebas_VIH_2020-2",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Linemamientos_Certificación_S.Pruebas_VIH_2020-2.pdf",
                },
                {
                    title: "Manual de Adherencia al Tratamiento Antirretroviral para Personas con VIH",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Manual de Adherencia al Tratamiento Antirretroviral para Personas con VIH.pdf",
                },
                {
                    title: "Manual de atención integral al niño y a la niña con VIH",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Manual de atención integral al niño y a la niña con VIH..pdf",
                },
                {
                    title: "MANUAL DE ATENCIÓN INTEGRAL A PERSONAS ADULTAS Y ADOLESCENTES CON EL VIRUS DE LA INMUNODEFICIENCIA HUMANA",
                    fileURL: "/Normas y Protocolos por Componente/VIH/MANUAL DE ATENCIÓN INTEGRAL A PERSONAS ADULTAS Y ADOLESCENTES CON EL VIRUS DE LA INMUNODEFICIENCIA HUMANA (1).pdf",
                },
                {
                    title: "MANUAL PARA EL MANEJO CLINICO DE LAS INFECCIONES DE TRANSMISION SEXUAL",
                    fileURL: "/Normas y Protocolos por Componente/VIH/MANUAL PARA EL MANEJO CLINICO DE LAS INFECCIONES DE TRANSMISION SEXUAL.pdf",
                },
                {
                    title: "Norma tecnica ITS en Honduras",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Norma tecnica ITS en Honduras.pdf",
                },
                {
                    title: "Protocolo PPE VIH aprobado 29 Marzo FINAL",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Protocolo PPE VIH aprobado 29 Marzo FINAL.pdf",
                },
                {
                    title: "Protocolo PPE VIH aprobado",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Protocolo PPE VIH aprobado.pdf",
                },
                {
                    title: "SESAL Lineamientos actualizados para el funcionamiento de los comités de mortalidad materna 01R2",
                    fileURL: "/Normas y Protocolos por Componente/VIH/SESAL Lineamientos actualizados para el funcionamiento de los comités de mortalidad materna 01R2.pdf",
                },
                {
                    title: "Sesal Manual de atención integral a la embarazada con Vih para prevenir la transmisión al hijo o hija",
                    fileURL: "/Normas y Protocolos por Componente/VIH/Sesal Manual de atención integral a la embarazada con Vih para prevenir la transmisión al hijo ó hija.pdf",
                },
            ],
        },
        {
            label: "Protocolo menor de 5 años",
            value: "menor5",
            cards: [
                {
                    title: "AIEPI Agosto 2013",
                    fileURL: "/Normas y Protocolos por Componente/Protocolo menor de 5 años/aiepi_agosto_2013__2___1__w_ain-c.pdf",
                },
                {
                    title: "Protocolo Atencion al menor de 5 años Vol.1",
                    fileURL: "/Normas y Protocolos por Componente/Protocolo menor de 5 años/Protocolo Atencion al menor de 5 años Vol.1.pdf",
                },
                {
                    title: "Protocolo Atencion al menor de 5 años Vol.2",
                    fileURL: "/Normas y Protocolos por Componente/Protocolo menor de 5 años/Protocolo Atencion al menor de 5 años Vol.2.pdf",
                },
            ],
        },
        {
            label: "Referencia respuesta",
            value: "referencia",
            cards: [
                {
                    title: "Lineam DM 2 V FINAL 16042018",
                    fileURL: "/Normas y Protocolos por Componente/Referencia respuesta/Lineam DM 2 V FINAL 16042018 (1).pdf",
                },
                {
                    title: "LINEAMIENTO FINAL Documento Referencia y Respuesta 04-06",
                    fileURL: "/Normas y Protocolos por Componente/Referencia respuesta/LINEAMIENTO FINAL Documento Referencia y Respuesta 04-06.pdf",
                },
            ],
        },
        {
            label: "Tuberculosis",
            value: "tuberculosis",
            cards: [
                {
                    title: "GUIA CONTROL INFECCIONES TB 13 MAYO",
                    fileURL: "/Normas y Protocolos por Componente/Tuberculosis/GUIA CONTROL INFECCIONES TB 13 MAYO.pdf",
                },
                {
                    title: "Guía Coinfección TB.VIH Enero 19 FINAL",
                    fileURL: "/Normas y Protocolos por Componente/Tuberculosis/Guía Coinfeccion TB.VIH Enero 19 FINAL.pdf",
                },
                {
                    title: "Guía de Abordaje Integral de la Comorbilidad Tuberculosis y Diabetes Mellitus",
                    fileURL: "/Normas y Protocolos por Componente/Tuberculosis/Guía de Abordaje Integral de la Comorbilidad Tuberculosis y Diabetes Mellitus.pdf",
                },
                {
                    title: "PROTOCOLO DEL MANEJO DE LA TUBERCULOSIS EN PEDIATRIA",
                    fileURL: "/Normas y Protocolos por Componente/Tuberculosis/PROTOCOLO DEL MANEJO DE LA TUBERCULOSIS EN PEDIATRIA. final.pdf",
                },
            ],
        },
        {
            label: "Lineamientos de Protección SS",
            value: "proteccion",
            cards: [
                {
                    title: "LINEAMIENTOS DE PROTECCION PARA LOS PRESTADORES DE SERVICIOS DE SALUD ANTE SITUACIONES DE RIESGO PRODUCTO DE LA VIOLENCIA SOCIAL",
                    fileURL: "/Normas y Protocolos por Componente/Lineamientos de Protección SS/Lineamientos-Proteccion-SS.pdf",
                },
            ],
        },
        {
            label: "PAI",
            value: "pai",
            cards: [
                {
                    title: "Ley de Vacunas de la Republica de Honduras",
                    fileURL: "/Normas y Protocolos por Componente/PAI/Ley-de-Vacunas-de-la-Republica-de-Honduras.pdf",
                },
                {
                    title: "Normas y procedimientos del programa ampliado de inmunizaciones (pai) de honduras",
                    fileURL: "/Normas y Protocolos por Componente/PAI/normas.y.procedimientos.del.programa.ampliado.de.inmunizaciones.(pai).de.honduras.pdf",
                },
            ],
        },
        {
            label: "Arbovirosis",
            value: "arbovirosis",
            cards: [
                {
                    title: "Lineamientos de Dengue LN25",
                    fileURL: "/Normas y Protocolos por Componente/Arbovirosis/Lineamientos de Dengue LN25.pdf",
                },
                {
                    title: "LINEAMIENTOS PARA LA DETECCIÓN Y MANEJO INTEGRAL DE LA INFECCIÓN POR ZIKA",
                    fileURL: "/Normas y Protocolos por Componente/Arbovirosis/LINEAMIENTOS PARA LA DETECCIÓN Y MANEJO INTEGRAL DE LA INFECCIÓN POR ZIKA.pdf",
                },
                {
                    title: "MANUAL DE PROCEDIMIENTO ZIKA",
                    fileURL: "/Normas y Protocolos por Componente/Arbovirosis/MANUAL DE PROCEDIMIENTO ZIKA.pdf",
                },
                {
                    title: "MANUAL DE PROCEDIMIENTOS PARA EL MANEJO INTEGRAL DE VECTORES DE HONDURAS",
                    fileURL: "/Normas y Protocolos por Componente/Arbovirosis/MANUAL DE PROCEDIMIENTOS PARA EL MANEJO INTEGRAL DE VECTORES DE HONDURAS.pdf",
                },
            ],
        },
        {
            label: "Atención a la mujer",
            value: "mujer",
            cards: [
                {
                    title: "Lineamiento atención de embarazadas COVID19",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Lineamiento.atencion.de.embarazadas.COVID19.pdf",
                },
                {
                    title: "MANUAL PARA LA ATENCION EN PLANIFICACION",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/MANUAL-PARA-LA-ATENCION-EN-PLANIFICACION.pdf",
                },
                {
                    title: "NTHSS ATENCIÓN DURANTE LA PRECONCEPCIÓN, EL EMBARAZO, EL PARTO, EL PUERPERIO Y DEL NEONATO",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/NTHSS ATENCIÓN DURANTE LA PRECONCEPCIÓN, EL EMBARAZO, EL PARTO, EL PUERPERIO Y DEL NEONATO..pdf",
                },
                {
                    title: "Protocolo de Salud Materna 2025",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Protocolo de Salud Materna 2025.pdf",
                },
                {
                    title: "Protocolo para la Atención de Planificación Familiar",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Protocolo para la Atenciòn de Planificacion Familiar.pdf",
                },
                {
                    title: "Sesal Volumen 3 Complicaciones Obstetricas Rev.01-2020",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Sesal Volumen 3 Complicaciones Obstetricas Rev.01-2020 (051120) 2.pdf",
                },
                {
                    title: "Volumen 1 Protocolos de Atención Nivel Ambulatorio",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Volumen 1 Protocolos de Atención Nivel Ambulatorio VO.pdf",
                },
                {
                    title: "Volumen 2 Protocolos Atencion del parto y el RN modificado",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Volumen 2 Protocolos Atencion del parto y el RN modificado VO.pdf",
                },
                {
                    title: "Volumen 4 Protocolos de Complicaciones Neonatales",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Volumen 4 Protocolos de Complicaciones Neonatales b.pdf",
                },
                {
                    title: "Volumen 5 Manejo inicial y referencia",
                    fileURL: "/Normas y Protocolos por Componente/Atención a la mujer/Volumen 5 Manejo inicial y referencia VO.pdf",
                },
            ],
        },
        {
            label: "Calidad",
            value: "calidad",
            cards: [
                {
                    title: "Lineamientos tecnicos para mej cont de la Calidad",
                    fileURL: "/Normas y Protocolos por Componente/Calidad/Lineamientos tecnicos para mej cont de la Calidad.pdf",
                },
            ],
        },
        {
            label: "Desechos farmacéuticos",
            value: "desechos",
            cards: [
                {
                    title: "Lineamientos desechos farmacéuticos Dañados y Vencidos",
                    fileURL: "/Normas y Protocolos por Componente/desechos farmacéuticos/Lineamientos desechos farmacéuticos Dañados y Vencidos.pdf",
                },
            ],
        },
    ];

    return (
        <div>
            <StickyNavbar />
            <NavbarSimple />
            <Typography variant="h1" color="blue-gray" className="text-center my-4">
                Documentos y Protocolos
            </Typography>
            <DescargasTab data={data} />
        </div>
    );
}
