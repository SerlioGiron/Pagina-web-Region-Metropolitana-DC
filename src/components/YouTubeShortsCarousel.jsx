import {useState} from "react";
import {Carousel} from "../app/MTailwind";

export function YouTubeShortCarousel() {
    const videoIds = ["zHJCEX1rh8Q", "-NzgjWhUPdc", "YcqWuM75qFc"];
    return (
        <div className="w-full flex justify-center p-4">
            <div className="w-full ">
                <Carousel
                    // autoplay={true}
                    loop={true}
                    className="h-[55vh] md:h-[85vh] w-full"
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
                    {videoIds.map((videoId, index) => (
                        <iframe
                            key={index}
                            className="h-full w-full rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                            title={`YouTube Short ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
