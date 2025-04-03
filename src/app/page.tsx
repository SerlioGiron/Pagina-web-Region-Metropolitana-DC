"use client";
import {Button} from "./MTailwind";
import Image from "next/image";
import {StickyNavbar} from "../components/StickyNavbar";
import {CarouselDefault} from "../components/Carousel.jsx";
import {FooterWithSocialLinks} from "../components/Footer";
import {Carousel} from "./MTailwind";
import {Noticias} from "../components/Noticias";
import {YouTubeShort} from "../components/YouTubeShort";
import {YouTubeShortCarousel} from "../components/YouTubeShortsCarousel";
import {ContactSection14} from "./Departamentos/Marco-Normativo/direccion";

const defaultImages = [
    {
        src: "/assets/nuevas imagenes/imagen-1.jpg",
        alt: "image 1",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-2.jpg",
        alt: "image 2",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-3.jpg",
        alt: "image 3",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-4.jpg",
        alt: "image 4",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-5.jpg",
        alt: "image 5",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-6.jpg",
        alt: "image 6",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-7.jpg",
        alt: "image 7",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-8.jpg",
        alt: "image 8",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-9.jpg",
        alt: "image 9",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-10.jpg",
        alt: "image 10",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-11.jpg",
        alt: "image 11",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-12.jpg",
        alt: "image 12",
        className: "h-full w-full object-cover",
    },
    {
        src: "/assets/nuevas imagenes/imagen-13.jpg",
        alt: "image 13",
        className: "h-full w-full object-cover",
    },
];

export default function Home() {
    return (
        <div className="max-h-[600px]">
            <StickyNavbar />
            <CarouselDefault images={defaultImages} />
            <YouTubeShort videoId="IUj3Hl0QTQ8" />
            <Noticias />
            <YouTubeShortCarousel />
            <ContactSection14
                correo="metropolitanadc@gmail.com"
                horario="Lunes a Viernes de 7:00 am a 3:00 pm"
                telefono="2232-6443"
                direccion="Barrio Morazán, Edificio del Centro Integral de Salud Dr. Alonso Suazo, segundo piso, esquina opuesta del Estadio Nacional Jose de la Paz Herrera Ucles, Tegucigalpa M.D.C., Honduras C.A."
                foto="/assets/direccion-marco.jpg"
                maps="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3869.653137007857!2d-87.2052453249034!3d14.097641786331272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA1JzUxLjUiTiA4N8KwMTInMDkuNiJX!5e0!3m2!1ses-419!2shn!4v1743694653585!5m2!1ses-419!2shn"
            />
            <FooterWithSocialLinks />
        </div>
    );
}
