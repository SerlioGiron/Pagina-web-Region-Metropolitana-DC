"use client";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Typography} from "@material-tailwind/react";
import {useSearchParams} from "next/navigation";
import {noticias} from "@/data/noticias";
import {Suspense} from "react";
import dynamic from "next/dynamic";
import FooterWithSocialLinks from "@/components/Footer";
import { CarouselDefault } from "@/components/Carousel";

function BlogContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const noticia = noticias.find((noticia) => noticia.id === Number(id));
    return (
        <>
            <StickyNavbar />
            <div className="justify-center items-center flex flex-col">
                <Typography
                    as="h2"
                    variant="h2"
                    color="blue-gray"
                    className="text-center px-[16%] pb-[2%] "
                >
                    {noticia.title}
                </Typography>
                <CarouselDefault images={noticia.images} noticia={true}/>
                <Typography
                    variant="paragraph"
                    color="gray"
                    className="mt-8 px-[16%] py-[2%] text-justify justify-center whitespace-pre-line"
                >
                    {noticia.content}
                </Typography>
            </div>
            <FooterWithSocialLinks />
        </>
    );
}

export default function Blog() {
    return (
        <div className="justify-center items-center flex flex-col">
            <Suspense fallback={<h2>Cargando...</h2>}>
                <BlogContent />
            </Suspense>
        </div>
    );
}
