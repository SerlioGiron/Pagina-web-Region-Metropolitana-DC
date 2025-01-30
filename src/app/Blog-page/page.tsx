"use client";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Typography} from "@material-tailwind/react";
import {useSearchParams} from "next/navigation";
import {noticias} from "@/data/noticias";

export default function Blog() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const noticia = noticias.find((noticia) => noticia.id === Number(id));
    return (
        <div className="max-h-[768px]">
            <StickyNavbar />
            <Typography
                as="h1"
                variant="h1"
                color="blue-gray"
                className="text-center mt-8"
            >
                {noticia.title}
            </Typography>
            <img
                src={noticia.image}
                alt="noticia"
                className="w-full h-96 object-cover"
            />
            <Typography variant="p" color="gray" className="mt-8 px-4">
                {noticia.content}
            </Typography>
        </div>
    );
}
