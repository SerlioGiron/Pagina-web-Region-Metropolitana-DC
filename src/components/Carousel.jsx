"use client";
import {Carousel} from "../app/MTailwind";

export function CarouselDefault() {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            className=" h-[55vh] md:h-[85vh] w-full"
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
            <img
                src="/assets/nuevas imagenes/imagen-1.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="/assets/nuevas imagenes/imagen-3.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="/assets/nuevas imagenes/imagen-2.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}
