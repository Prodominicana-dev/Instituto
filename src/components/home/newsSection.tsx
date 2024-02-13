"use client";
import React from "react";
import NewsCard from "./newsCard";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function NewsSection() {
  const news = [
    {
      title: "Unicaribe imparte conferencia sobre inteligencia artificial",
      date: "15 de marzo, 2024",
      image: "/images/ai.jpg",
      link: "/#",
    },
    {
      title: "Seminario Educativo: Transformando la Educación para el Futuro",
      date: "2 de abril, 2024",
      image: "/images/vr.jpg",
      link: "/#",
    },
    {
      title:
        "Intec inaugura moderno laboratorio académico de realidad extendida",
      date: "10 de mayo, 2024",
      image: "/images/visionpro.jpg",
      link: "/#",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-trueGray-100 lg:p-20 p-10">
      <div className="w-full lg:w-10/12 flex flex-col justify-center text-center space-y-10">
        <div className="space-y-5">
          <h1 className="text-4xl xl:text-5xl text-black">
            Noticias y eventos
          </h1>
          <p className="xl:text-xl text-gray-400">
            Descubre las últimas noticias y eventos destacados en Instituto
            Prodominicana
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {news.map((item, index) => (
            <NewsCard
              title={item.title}
              date={item.date}
              image={item.image}
              link={item.link}
              key={index}
            />
          ))}
        </div>
        <Link href="/#">
          <Button
            placeholder={undefined}
            className="p-5 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white duration-300"
          >
            Ver todas las noticias
          </Button>
        </Link>
      </div>
    </div>
  );
}
