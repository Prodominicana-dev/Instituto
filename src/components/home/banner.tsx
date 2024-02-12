"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Banner() {
  return (
    <Carousel
      placeholder={undefined}
      className=" w-full h-screen lg:h-[80vh]"
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
      <div className="w-full h-full relative">
        <img
          src={"/images/crucero.jpg"}
          alt=""
          width={2048}
          height={1313}
          className="w-full h-full object-cover absolute"
        />
        <div className="flex justify-center items-center gap-5 bg-black/40 w-full h-full absolute z-10">
          <div className="w-10/12 justify-center items-center lg:w-4/12 flex flex-col gap-4">
            <div>
              <p className="font-medium text-xl">
                DIPLOMADOS ENERO - MARZO 2024
              </p>
              <h1 className="text-3xl font-bold">
                COMERCIO EXTERIOR EN CONCENTRACIÓN EN DESARROLLO DE NUEVOS
                MERCADOS
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <div className="w-full flex flex-col lg:flex-row gap-5">
              <button className="bg-red-600 w-full lg:w-1/2 h-14 rounded-sm">
                MÁS INFORMACIÓN
              </button>
              <button className="bg-transparent ring-2 ring-white w-full lg:w-1/2 h-14 rounded-sm">
                MÁS INFORMACIÓN
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-4/12"></div>
        </div>
      </div>
    </Carousel>
  );
}
