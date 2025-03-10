"use client";
import {Button} from "./MTailwind";
import Image from "next/image";
import {StickyNavbar} from "../components/StickyNavbar";
import {CarouselDefault} from "../components/Carousel.jsx";
import {FooterWithSocialLinks} from "../components/Footer";
import {Carousel} from "./MTailwind";
import {Noticias} from "../components/Noticias";

export default function Home() {
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <CarouselDefault />
            <Noticias />
            <FooterWithSocialLinks />
        </div>
    );
}
