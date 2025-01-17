"use client";
import {Carousel} from "../app/MTailwind";
import {HorizontalCard} from "./HorizontalCard";

export function Noticias() {
    return (
        <div style={{height: "100vh"}} className="bg-black">
            <Carousel
                autoplay={true}
                className="rounded-xl"
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
                <div className="flex h-full items-center justify-center">
                    <HorizontalCard />
                </div>
                <div className="flex h-full items-center justify-center">
                    <HorizontalCard />
                </div>
                <div className="flex h-full items-center justify-center">
                    <HorizontalCard />
                </div>
                
            </Carousel>
        </div>
    );
}
