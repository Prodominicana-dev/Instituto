"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Input, Textarea } from "@material-tailwind/react";
import React from "react";

export default function Contact() {
  return (
    <section className="w-full py-10 lg:py-0 bg-white flex justify-center items-center">
      <div className="w-10/12 lg:w-8/12 h-5/6 flex flex-col gap-5 lg:gap-8">
        <h1 className="w-full text-start gap-3 lg:gap-8 text-black font-bold text-2xl lg:text-4xl xl:text-5xl">
          Contacto
        </h1>
        <p className=" xl:text-xl text-gray-400  w-full text-start">
          Contáctanos para cualquier consulta o información adicional que
          necesites.
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Nombre"
              type="text"
              placeholder="Nombre"
              className="w-full"
            />
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Correo"
              type="email"
              placeholder="Correo"
              className="w-full "
            />
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Teléfono"
              type="tel"
              placeholder="Teléfono"
              className="w-full "
            />
          </div>
          <Textarea variant="standard" label="Mensaje" />
        </div>
        <div className="w-full">
          <button className="w-full lg:w-56 h-12 rounded-md bg-crimsonRed gap-3 flex flex-row justify-center items-center">
            Enviar mensaje <PaperAirplaneIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
