"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import ContinuingEducationCard from "../cards/continuingEducationCard";

export default function ContinuingEducationSection() {
  const academicPrograms = [
    {
      title:
        "Diplomado Comercio Exterior en Concentración en Desarrollo de Nuevos Mercados",
      date: "15 de marzo, 2024",
      image: "/images/worldTrade.jpg",
      link: "/#",
    },
    {
      title: "Diplomado en Gestión de Puertos Internacionales",
      date: "2 de abril, 2024",
      image: "/images/internationalPorts.jpg",
      link: "/#",
    },
    {
      title: "Diplomado en Formulación y Evaluación de Proyectos de Inversión",
      date: "10 de mayo, 2024",
      image: "/images/investmentProgram.jpg",
      link: "/#",
    },
    {
      title: "Curso de Gestión de Inversión Extranjera Directa (IED)",
      date: "20 de septiembre, 2024",
      image: "/images/ied.jpg",
      link: "/#",
    },
    {
      title: "Curso de Exportación e Internacionalización de Empresas",
      date: "5 de octubre, 2024",
      image: "/images/exportation.jpg",
      link: "/#",
    },
    {
      title: "Curso de Finanzas Internacionales y Comercio Exterior",
      date: "15 de noviembre, 2024",
      image: "/images/business.jpg",
      link: "/#",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-trueGray-100 lg:p-20 p-10">
      <div className="w-full lg:w-10/12 flex flex-col justify-center text-center space-y-10">
        <div className="space-y-5">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl text-black font-bold">
            Educación Continuada
          </h1>
          <p className="xl:text-xl text-gray-400">
            Potencia tu aprendizaje con nuestra oferta de educación continua.
            ¡Explora oportunidades para crecer profesionalmente y alcanzar tus
            metas académicas!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {academicPrograms.map((item, index) => (
            <ContinuingEducationCard
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
            Ver todos
          </Button>
        </Link>
      </div>
    </div>
  );
}
