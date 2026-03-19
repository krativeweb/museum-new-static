"use client";

import { useRef, useEffect } from "react";
import video from "../api/data/videoSection.json";
import useReveal from "./useReveal";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [ref, visible] = useReveal();

  useEffect(() => {
    window.heroVideo = videoRef.current;
  }, []);

  return (
    <section
      ref={ref}
      className={`video-hero ${visible ? "fade-active" : ""}`}
    >

      <div className="video-left-strip" />

      <video
        ref={videoRef}
        className="hero-video"
        src={video.video.src}
        autoPlay={video.video.autoPlay}
        muted={video.video.muted}
        loop={video.video.loop}
        playsInline={video.video.playsInline}
      />

      <div className="video-thumbnail">
        <img
          src={video.thumbnail.src}
          alt={video.thumbnail.alt}
        />
      </div>

    </section>
  );
}
