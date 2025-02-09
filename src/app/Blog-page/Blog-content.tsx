"use client";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Typography} from "@material-tailwind/react";
import {useSearchParams} from "next/navigation";
import {noticias} from "@/data/noticias";
import { Suspense } from "react";

export default function BlogContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const noticia = noticias.find((noticia) => noticia.id === Number(id));
    return (
        <div className="justify-center items-center flex flex-col">
            <StickyNavbar />
            <Typography
                as="h1"
                variant="h1"
                color="blue-gray"
                className="text-center mt-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                {noticia.title}
            </Typography>
            <img
                src={noticia.image}
                alt="noticia"
                className="w-full h-96 object-cover"
            />
            <Typography variant="paragraph" color="gray" className="mt-8 px-[16%] text-justify justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {noticia.content}
            </Typography>
        </div>
    );
}
