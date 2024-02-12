"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Collapse } from "@material-tailwind/react";
import OgticRules from "./rules";
import SocialMedia from "./socialMedia";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function FooterMobile() {
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
    <div className="flex flex-col xl:hidden">
      <div className="w-full h-full bg-blue-950 flex flex-col p-10 space-y-10">
        <div className="flex ">
          <Image
            alt="logo"
            src={"/svg/logos/prodominicana.svg"}
            width={600}
            height={600}
            className="w-56"
          />
        </div>
        <div className="w-full h-full flex flex-col space-y-8 justify-center items-center ">
          <div className="w-full h-full flex space-x-4">
            <div className="flex flex-col h-full w-6/12 text-white  space-y-4">
              <h1 className=" font-bold text-lg h-2/6 flex w-full">
                CONÓCENOS
              </h1>
              <Link
                href={"/about"}
                className="text-sm font-light h-full w-full "
              >
                <p>Instituto Prodominicana</p>
              </Link>
            </div>
            <div className="flex flex-col h-full w-6/12 text-white space-y-4">
              <h1 className=" font-bold text-lg h-2/6 flex w-full">
                CONTÁCTANOS
              </h1>
              <div className="text-sm font-light h-full w-full  flex flex-col">
                <Link
                  href={"tel:8095305505"}
                  className="text-white hover:text-cyan-600 duration-300"
                >
                  t: 809-530-5505
                </Link>
                <Link
                  href={"mailto:servicios@prodominicana.gob.do"}
                  className="text-white hover:text-cyan-600 duration-300"
                >
                  instituto@prodominicana.gob.do
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex space-x-4">
            <div className="flex flex-col h-full w-6/12 text-white  space-y-4">
              <h1 className=" font-bold text-lg h-2/6 flex w-full">BÚSCANOS</h1>
              <div className="text-sm font-light h-full w-full">
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
            <div className="flex flex-col h-full w-6/12 text-white space-y-4">
              <h1 className=" font-bold text-lg h-2/6 flex w-full">
                INFÓRMATE
              </h1>
              <div className="text-sm font-light  flex flex-col space-y-2 justify-start items-start h-full w-full ">
                <Link
                  href="/"
                  className="text-white hover:text-cyan-600 duration-300"
                >
                  Términos de uso
                </Link>
                <Link
                  href="/"
                  className="text-white hover:text-cyan-600 duration-300"
                >
                  Política de privacidad
                </Link>
                <Link
                  href="/"
                  className="text-white hover:text-cyan-600 duration-300"
                >
                  Preguntas frecuentes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white flex flex-col divide-y">
        <div className="w-full h-full">
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
            <div className="flex flex-row flex-wrap h-full w-full gap-x-5 gap-y-4 px-10 pb-5">
              {normas.map(({ name, url, src }, index) => (
                <OgticRules title={name} url={url} source={src} key={index} />
              ))}
            </div>
          </Collapse>
        </div>

        <div className="w-full flex flex-col space-y-4  p-5 items-center">
          <div className="w-full flex-col flex justify-start items-center h-full">
            <p className="text-center">
              {" "}
              © {year} {"Todos los derechos reservados. Desarrollado por"}{" "}
            </p>
            <Image
              alt="prodomsvg"
              src={"/prodominicana.svg"}
              width={150}
              height={150}
            />
          </div>
          <div className="w-full flex space-x-4 justify-center items-center h-full">
            <h1 className="text-blue-950 font-bold text-lg flex">SÍGUENOS</h1>
            {socialMedia.map(({ name, url, src }, index) => (
              <SocialMedia url={url} image={src} alt={name} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
