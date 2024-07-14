"use client";
import React, { useRef, useState } from "react";

export const Video = ({ url }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="grid grid-cols-1 rounded-xl overflow-hidden">
      <div className="relative">
        <video
          preload="auto"
          onCanPlay={() => videoRef.current.play()}
          ref={videoRef}
          playsInline
          autoPlay
          width={"1080"}
          height={"1350"}
          className="w-full h-fit"
          loop
          muted
        >
          <source src={url} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="z-50 absolute left-1/2 transform -translate-x-1/2 top-1/2 md:top-[calc(50%-32px)] sm:top-[45%]">
        <button
          onClick={playPause}
          className="bg-no-repeat w-8 h-8 outline-none border-none"
          style={{
            backgroundImage: isPlaying
              ? "none"
              : "url(https://s3.amazonaws.com/appforest_uf/f1662156962291x440869126503491840/trthrhyrhty.svg)",
          }}
        ></button>
      </div>
    </div>
  );
};
