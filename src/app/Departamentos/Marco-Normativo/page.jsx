"use client";
import {Noticias} from "../../../components/Noticias";
import {CarouselDefault} from "../../../components/Carousel";
import {StickyNavbar} from "../../../components/StickyNavbar";
import {Preguntas} from "../../../components/Preguntas";
import {FooterWithSocialLinks} from "../../../components/Footer";
import {DescargasTab} from "../../../components/Descargas";
import {NavbarSimple} from "../../../components/NavbarMarco";
import {ContactSection14} from "./direccion";
import Image from 'next/image';

export default function Marco_Normativo() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <NavbarSimple />
            <div className="w-full flex justify-center my-8">
                <Image
                    src="/assets/marco-normativo.jpg"
                    alt="Equipo de trabajo Marco Normativo"
                    width={1024}
                    height={576}
                    className="rounded-lg shadow-lg"
                />
            </div>
            <ContactSection14
                correo="dvmn.rsmtegucigalpa@gmail.com"
                horario="Lunes a Viernes de 7:00 am a 3:00 pm"
                telefono="2232-1139, 2232-1685"
                direccion="Barrio Morazán, calle hacia el Parque Cerro Juana Lainez, contiguo a CESCCO, frente al Cuartel General del Heroico y Benemérito Cuerpo de Bomberos de Honduras, Tegucigalpa M.D.C., Honduras C.A."
                foto="/assets/direccion-marco.jpg"
                maps="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3869.655152021599!2d-87.2053601249034!3d14.097522986331336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA1JzUxLjEiTiA4N8KwMTInMTAuMCJX!5e0!3m2!1ses-419!2shn!4v1743443866783!5m2!1ses-419!2shn"
            />
            <FooterWithSocialLinks />
        </div>
    );
}
