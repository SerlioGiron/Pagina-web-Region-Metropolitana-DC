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

const defaultImages = [
    { src: "/assets/nuevas imagenes/imagen-1.jpg", alt: "image 1", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-2.jpg", alt: "image 2", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-3.jpg", alt: "image 3", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-4.jpg", alt: "image 4", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-5.jpg", alt: "image 5", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-6.jpg", alt: "image 6", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-7.jpg", alt: "image 7", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-8.jpg", alt: "image 8", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-9.jpg", alt: "image 9", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-10.jpg", alt: "image 10", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-11.jpg", alt: "image 11", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-12.jpg", alt: "image 12", className: "h-full w-full object-cover" },
    { src: "/assets/nuevas imagenes/imagen-13.jpg", alt: "image 13", className: "h-full w-full object-cover" },
];

export default function Home() {
    return (
        <div className="max-h-[600px]">
            <StickyNavbar />
            <CarouselDefault images={defaultImages} />
            <YouTubeShort videoId="IUj3Hl0QTQ8" />
            <Noticias />
            <YouTubeShortCarousel />
            <FooterWithSocialLinks />
        </div>
    );
}
