"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import EducationCard from "../cards/continuingEducationCard";

export default function ContinuingEducationSection() {
  const data = [
    {
      title: "Curso especializado Liderazgo, Creatividad e Innovación",
      date: new Date().toLocaleDateString(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/teacher.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: new Date().toLocaleTimeString(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-10/12 h-5/6 flex flex-col gap-5">
        <h1 className="w-full text-center gap-3 lg:gap-8 font-bold text-black text-2xl lg:text-4xl">
          Educación Continuada
        </h1>
        <p className="font-light text-black w-full text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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
