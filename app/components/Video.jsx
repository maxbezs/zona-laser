"use client";
import React, { useRef, useState } from "react";

export const Video = ({ url }) => {
  return (
    <div className="grid grid-cols-1 rounded-xl overflow-hidden sm:max-w-2xl bg-red sm:mx-auto sm:max-h-[500px]">
      <div className="relative">
        <video
          preload="auto"
          playsInline
          autoPlay
          width={"1080"}
          height={"1350"}
          className="w-full h-fit "
          loop
          muted
        >
          <source src={url} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};
