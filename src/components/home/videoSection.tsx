"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className="h-[25vh] sm:h-[60vh]">
      <iframe
        src="https://www.youtube.com/embed/IvMiDEGsd8U?si=HoFsD7UIAW6Sn392"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full"
      ></iframe>
    </section>
  );
}
