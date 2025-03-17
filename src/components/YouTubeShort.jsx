import React from "react";

export function YouTubeShort ({ videoId })  {
    return (
      <div className="flex justify-center items-center p-4 bg-[#68c5d7]">
        <iframe
        className="w-full max-w-4xl my-10 h-[500px] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
      </div>
      );
};
