"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Collapse } from "@material-tailwind/react";
import OgticRules from "./rules";
import SocialMedia from "./socialMedia";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  // Año actual
  const date = new Date();
  const year = date.getFullYear();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const rotate = open ? "rotate-90 duration-300" : "rotate-0 duration-300";

  const normas = [
    {
      name: "Norma para el desarrollo y gestión de los portales web y la transparencia de los organismos del Estado Dominicano",
      url: "https://nortic.ogtic.gob.do/instituciones/PRODOMINICANA",
      src: "https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/638",
    },
  ];

  const socialMedia = [
    {
      name: "facebook",
      url: "https://www.facebook.com/Prodominicana",
      src: "/svg/social/footer/facebook.svg",
    },
    {
      name: "x",
      url: "https://x.com/prodominicana",
      src: "/svg/social/footer/x.svg",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/prodominicana",
      src: "/svg/social/footer/instagram.svg",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/@ProDominicana",
      src: "/svg/social/footer/youtube.svg",
    },
  ];

  return (
    <div className=" flex-col xl:flex hidden w-full justify-center items-center bg-blue-950">
      <div className="w-11/12 h-full md:h-[30vh] flex space-x-8 items-center">
        <div className="flex items-center">
          <Image
            alt="logo"
            src={"/svg/logos/institutoWhite.svg"}
            width={600}
            height={600}
            className="w-40"
          />
        </div>
        <div className="w-[2px] h-3/6 bg-white "></div>
        <div className="w-full h-3/6 flex justify-center items-center space-x-3">
          <div className="flex flex-col h-full sm:justify-center sm:items-center text-white space-y-4 w-3/12">
            <h1 className="font-bold text-lg h-2/6 flex sm:items-end w-full uppercase">
              CONÓCENOS
            </h1>
            <div className="h-3/6 w-full">
              <Link
                href={"/#"}
                className="flex flex-col shrink text-white hover:text-cyan-600 text-sm font-light"
              >
                <p>Instituto Prodominicana</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full sm:justify-center sm:items-center text-white space-y-4 w-3/12">
            <h1 className="font-bold text-lg h-2/6 flex sm:items-end w-full">
              CONTÁCTANOS
            </h1>
            <div className="text-sm font-light h-3/6 w-full flex flex-col space-y-2">
              <Link
                href={"tel:8095305505"}
                className="text-white hover:text-cyan-600 duration-300 "
              >
                t: 809-530-5505
              </Link>
              <Link
                href={"mailto:servicios@prodominicana.gob.do"}
                className="flex text-white hover:text-cyan-600 duration-300 "
              >
                instituto@prodominicana.gob.do
              </Link>
            </div>
          </div>

          <div className="flex flex-col h-full sm:justify-center sm:items-center text-white  space-y-4 w-3/12">
            <h1 className=" font-bold text-lg h-2/6 flex sm:items-end  w-full">
              BÚSCANOS
            </h1>
            <div className="text-sm font-light h-3/6 w-full">
              <Link
                href={
                  "https://www.google.com/maps/place/ProDominicana/@18.4506423,-69.9756687,17z/data=!3m1!4b1!4m6!3m5!1s0x8ea561ebff768b75:0xa76a69f95f4a6da5!8m2!3d18.4506372!4d-69.9730938!16s%2Fg%2F1hf2n28nf?entry=ttu"
                }
                target="_blank"
                className="text-white hover:text-cyan-600 duration-300"
              >
                <p>
                  Av. 27 de Febrero esq. Av. Gregorio Luperón, Plaza de la
                  Bandera.
                </p>
                <p>Santo Domingo, República Dominicana</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center items-center text-white space-y-4 w-3/12">
            <h1 className=" font-bold text-lg h-2/6 flex sm:items-end w-full">
              INFÓRMATE
            </h1>
            <div className="text-sm font-light h-3/6 w-full flex flex-col space-y-2">
              <Link
                href="/#"
                className="text-white hover:text-cyan-600 duration-300"
              >
                Términos de uso
              </Link>
              <Link
                href="/#"
                className="text-white hover:text-cyan-600 duration-300"
              >
                Política de privacidad
              </Link>
              <Link
                href="/#"
                className="text-white hover:text-cyan-600 duration-300"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-center md:h-[8vh] bg-white flex flex-col divide-y">
        {/* <div className="flex h-4/6 w-11/12 items-center space-x-4 ">
          {normas.map(({ name, url, src }, index) => (
            <OgticRules title={name} url={url} source={src} key={index} />
          ))}
        </div>

        <div className="sm:hidden w-full h-full">
          <button
            onClick={toggleOpen}
            className="w-full h-full flex justify-between items-center text-blue-950 text-left font-bold text-lg px-10 py-5"
          >
            <p>Certificaciones obtenidas</p>

            <div>
              <ChevronRightIcon className={`${rotate} rotate-0 w-5 h-5`} />
            </div>
          </button>
          <Collapse open={open} className="w-full">
            <div className="grid grid-cols-3 h-full w-full gap-2 px-10 pb-5">
              {normas.map(({ name, url, src }, index) => (
                <OgticRules title={name} url={url} source={src} key={index} />
              ))}
            </div>
          </Collapse>
        </div> */}
        <div className="h-2/6 w-11/12 flex items-center text-blue-950">
          <div className="w-8/12 flex  space-x-2 justify-start items-center h-full">
            <p className="text-center sm:text-left">
              {" "}
              © {year} {"Todos los derechos reservados. Desarrollado por"}{" "}
            </p>
            <Link href={"https://prodominicana.gob.do"}>
              <Image
                alt="prodomsvg"
                src={"/prodominicana.svg"}
                width={150}
                height={150}
                className="w-20"
              />
            </Link>
          </div>
          <div className=" w-4/12 flex space-x-4 justify-center sm:justify-end items-center h-full">
            <h1 className=" sm:h-[25px] font-bold text-lg flex">SÍGUENOS</h1>
            {socialMedia.map(({ name, url, src }, index) => (
              <SocialMedia url={url} image={src} alt={name} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
