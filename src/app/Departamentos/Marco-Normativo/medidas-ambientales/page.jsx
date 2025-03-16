'use client';
import { NavbarSimple } from "@/components/NavbarMarco";
import { StickyNavbar } from "@/components/StickyNavbar";
import {ViewPDF} from "@/components/view_pdf";
import { Typography } from "@material-tailwind/react";


export default function MedidasAmbientales() {
    return(
        <div>
            <NavbarSimple />
            <ViewPDF pdfUrl="/medidas-ambientales/DVMNR-064, 2da.V., Requisitos de Constancia de Cumplimiento de Medidas Ambientales CC.pdf" />
        </div>
    )
}