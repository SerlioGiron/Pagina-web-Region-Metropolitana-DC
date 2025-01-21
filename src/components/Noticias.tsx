"use client";
import {Carousel} from "../app/MTailwind";
import {HorizontalCard} from "./HorizontalCard";

export function Noticias() {
    return (
        <div style={{height: "100vh"}} className="bg-white">
            <Carousel
                loop={true}
                prevArrow={({ handlePrev }) => (
                    <button
                        className="absolute top-2/4 left-4 -translate-y-2/4 rounded-full bg-black p-2"
                        onClick={handlePrev}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth={2}
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                )}
                nextArrow={({ handleNext }) => (
                    <button
                        className="absolute top-2/4 right-4 -translate-y-2/4 rounded-full bg-black p-2"
                        onClick={handleNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth={2}
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                )}
                autoplay={true}
                className="rounded-none"
                navigation={({setActiveIndex, activeIndex, length}) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-8 bg-black"
                                        : "w-4 bg-black/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {/* <div className="flex h-full items-center justify-center"> */}
                    <HorizontalCard />
                {/* </div> */}
                {/* <div className="flex h-full items-center justify-center"> */}
                    <HorizontalCard />
                {/* </div> */}
                {/* <div className="flex h-full items-center justify-center"> */}
                    <HorizontalCard />
                {/* </div> */}
                
            </Carousel>
        </div>
    );
}
