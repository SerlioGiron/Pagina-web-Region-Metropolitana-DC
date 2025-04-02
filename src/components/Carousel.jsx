"use client";
import {Carousel} from "../app/MTailwind";

export function CarouselDefault({ images = [], noticia = false }) {
    // Default images if none provided
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

    // Use provided images or default if empty array
    const carouselImages = images.length > 0 ? images : defaultImages;

    return (
        <Carousel
            autoplay={true}
            loop={true}
            className={`h-[55vh] ${noticia ? 'md:h-96' : 'md:h-[85vh]'} w-full`}
            navigation={({setActiveIndex, activeIndex, length}) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {carouselImages.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt || `image ${index + 1}`}
                    className={image.className || "h-full w-full object-cover"}
                />
            ))}
        </Carousel>
    );
}
