"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const banners = [
    {
      title: "DIPLOMADOS ENERO - MARZO 2024",
      subtitle:
        "COMERCIO EXTERIOR EN CONCENTRACIÓN EN DESARROLLO DE NUEVOS MERCADOS",
      description:
        "Desarrolla tus habilidades para identificar y aprovechar nuevas oportunidades de mercado a nivel internacional.",
      image: "/images/crucero.jpg",
      infoLink: "/#",
      admissionLink: "/#",
    },
    {
      title: "DIPLOMADOS ABRIL - JUNIO 2024",
      subtitle: "MARKETING DIGITAL ESTRATÉGICO",
      description:
        "Aprende las mejores prácticas y estrategias para llevar a cabo campañas de marketing digital efectivas y generar impacto en la audiencia.",
      image: "/images/marketing.jpg",
      infoLink: "/#",
      admissionLink: "/#",
    },
    {
      title: "DIPLOMADOS JULIO - SEPTIEMBRE 2024",
      subtitle: "GESTIÓN DE PROYECTOS AGILES",
      description:
        "Adquiere habilidades para liderar y gestionar proyectos de manera ágil, aplicando metodologías como Scrum y Kanban para optimizar el rendimiento del equipo.",
      image: "/images/agile.jpg",
      infoLink: "/#",
      admissionLink: "/#",
    },
    {
      title: "DIPLOMADOS OCTUBRE - DICIEMBRE 2024",
      subtitle: "ANÁLISIS DE DATOS Y BUSINESS INTELLIGENCE",
      description:
        "Desarrolla competencias en el análisis de datos para tomar decisiones informadas y estratégicas en el ámbito empresarial.",
      image: "/images/analysis.jpg",
      infoLink: "/#",
      admissionLink: "/#",
    },
  ];

  return (
    <Carousel
      placeholder={undefined}
      className="w-full h-screen lg:h-[80vh]"
      autoplay
      autoplayDelay={15000}
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {banners.map((banner, index) => (
        <div className="w-full h-full relative" key={index}>
          <Image
            src={banner.image}
            alt=""
            width={2048}
            height={1313}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center gap-5 bg-black/40 w-full h-full">
            <div className="w-10/12 lg:w-8/12">
              <div className="flex flex-col gap-4 w-full lg:w-6/12 text-white">
                <div>
                  <p className="font-medium text-xl uppercase">
                    {banner.title}
                  </p>
                  <h1 className="text-3xl font-bold uppercase">
                    {banner.subtitle}
                  </h1>
                </div>
                <p>{banner.description}</p>
                <div className="w-full flex flex-col lg:flex-row gap-5">
                  <Link
                    href={banner.infoLink}
                    className="bg-red-600 w-full lg:w-1/2 h-14 rounded-sm text-white hover:text-white/60 uppercase duration-300 flex justify-center items-center"
                  >
                    MÁS INFORMACIÓN
                  </Link>
                  <Link
                    href={banner.admissionLink}
                    className="bg-transparent border-2 border-white hover:bg-black/30 w-full lg:w-1/2 h-14 rounded-sm uppercase duration-300 flex justify-center items-center"
                  >
                    Solicita tu admisión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
