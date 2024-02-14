"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import React from "react";

export default function Contact() {
  return (
    <section className="w-full min-h-[50vh] bg-white flex justify-center items-center">
      <div className="w-10/12 h-5/6 flex flex-col gap-3 lg:gap-8">
        <h1 className="w-full text-start gap-3 lg:gap-8 font-bold text-black text-2xl lg:text-4xl">
          Contacto
        </h1>
        <p className="font-light text-black w-full text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Nombre"
              placeholder="Nombre"
              className="w-full md:w-1/3"
            />
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Correo"
              placeholder="Correo"
              className="w-full md:w-1/3"
            />
            <Input
              crossOrigin={undefined}
              variant="standard"
              label="Teléfono"
              placeholder="Teléfono"
              className="w-full md:w-1/3"
            />
          </div>
          <Input
            crossOrigin={undefined}
            variant="standard"
            label="Mensaje"
            placeholder="Mensaje"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <button className="w-56 h-12 rounded-md bg-red-500 gap-3 flex flex-row justify-center items-center">
            Enviar mensaje <PaperAirplaneIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
