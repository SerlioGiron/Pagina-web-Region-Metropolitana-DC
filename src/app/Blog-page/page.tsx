"use client";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Typography} from "@material-tailwind/react";
import {useSearchParams} from "next/navigation";
import {noticias} from "@/data/noticias";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const BlogContent = dynamic(() => import("./Blog-content"), { ssr: false });

export default function Blog() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const noticia = noticias.find((noticia) => noticia.id === Number(id));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogContent/>
        </Suspense>
    );
}
