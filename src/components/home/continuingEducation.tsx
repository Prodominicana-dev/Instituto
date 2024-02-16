"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import EducationCard from "../cards/continuingEducationCard";

export default function ContinuingEducationSection() {
  const data = [
    {
      title: "Curso especializado Liderazgo, Creatividad e Innovación",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/teacher.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
  ];
  return (
    <section className="w-full py-10 lg:py-0 lg:min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-10/12 h-5/6 flex flex-col items-center gap-5">
        <h1 className="w-full text-center gap-3 lg:gap-8 font-bold text-black text-2xl lg:text-4xl xl:text-5xl">
          Educación Continuada
        </h1>
        <p className="w-full lg:w-8/12  text-center xl:text-xl text-gray-400 ">
          Potencia tu aprendizaje con nuestra oferta de educación continua.
          ¡Explora oportunidades para crecer profesionalmente y alcanzar tus
          metas académicas!
        </p>
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
          <Carousel
            withIndicators
            height={400}
            slideSize={{ base: "100%", sm: "50%" }}
            loop
            align="start"
            className="w-full h-full flex justify-center"
          >
            {data.map(({ title, description, date, link, image }, index) => (
              <EducationCard
                key={index}
                title={title}
                date={date}
                description={description}
                link={link}
                image={image}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
