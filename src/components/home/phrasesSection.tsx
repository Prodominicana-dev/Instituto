"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export default function PhrasesSection() {
  const phrases = [
    {
      author: "Nelson Mandela",
      text: "La educación es el arma más poderosa que puedes usar para cambiar el mundo. ¡Capacítate y sé el cambio que deseas ver!",
    },
    {
      author: "Albert Einstein",
      text: "La mente que se abre a una nueva idea nunca volverá a su tamaño original. ¡Aprende y expande tus horizontes!",
    },
    {
      author: "Maya Angelou",
      text: "No hay mayor agonía que llevar una historia no contada dentro de ti. Descubre tu potencial y comparte tu conocimiento.",
    },
    {
      author: "Steve Jobs",
      text: "La única forma de hacer un gran trabajo es amar lo que haces. Si aún no lo has encontrado, ¡sigue buscando, no te conformes!",
    },
    {
      author: "Oprah Winfrey",
      text: "La educación es la clave para liberar el potencial humano. ¡Invierte en tu aprendizaje y desbloquea tu grandeza!",
    },
    {
      author: "Malcolm X",
      text: "La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él hoy. ¡Prepárate y avanza hacia tus metas!",
    },
    {
      author: "Marie Curie",
      text: "Nunca dejes que la adquisición de conocimiento termine. La curiosidad tiene su propia razón de existir. ¡Sigue aprendiendo y creciendo!",
    },
    {
      author: "Walt Disney",
      text: "La forma de comenzar es dejar de hablar y comenzar a hacer. ¡Inicia tu aprendizaje y alcanza tus sueños con acción!",
    },
    {
      author: "Bill Gates",
      text: "Si naciste pobre, no es tu error. Pero si mueres pobre, es tu error. La educación y la capacitación son tus herramientas para cambiar tu destino.",
    },
  ];

  return (
    <section className="w-full h-[70vh] relative">
      <Image
        src="/images/formalperson.jpg"
        width={1920}
        height={1080}
        alt="formal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-crimsonRed/80 w-full h-full">
        <Carousel
          autoplay
          autoplayDelay={10000}
          loop
          placeholder={undefined}
          className="w-full"
        >
          {phrases.map((phrase, index) => (
            <div
              className="flex flex-col justify-center items-center h-full p-16 lg:p-36 space-y-10 text-center text-white"
              key={index}
            >
              <p className="text-xl sm:text-2xl xl:text-3xl font-light">
                {phrase.author}
              </p>
              <h1 className="text-2xl sm:text-4xl xl:text-5xl">
                “{phrase.text}”
              </h1>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
