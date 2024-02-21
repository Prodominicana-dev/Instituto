"use client";

import {
  Bars3Icon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Collapse, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import ToolsMenuCollapse from "./toolsMenuCollapse";
import Link from "next/link";
import NavbarCollapseMobile from "./navbarCollapseMobile";
import NavbarLinkMobile from "./navbarLinkMobile";
import NavbarButtonMobile from "./navbarButtonMobile";

export default function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const toggleMenuOpen = () => setMenuOpen((cur) => !cur);

  const portalsListItems = [
    {
      title: "Portal del Estado Dominicano",
      link: "https://www.gob.do/",
      icon: "/svg/logos/portals/gobdo.svg",
    },
    {
      title: "Sistema de Atención Ciudadana",
      link: "https://311.gob.do/",
      icon: "/svg/logos/portals/311.svg",
    },
    {
      title: "911",
      link: "https://911.gob.do/",
      icon: "/svg/logos/portals/911.svg",
    },
    {
      title: "Observatorio Nacional",
      link: "https://observatorioserviciospublicos.gob.do",
      icon: "/svg/logos/portals/observatorioserviciospublicos.svg",
    },
    {
      title: "Beca tu futuro",
      link: "https://becas.gob.do",
      icon: "/svg/logos/portals/becatufuturo.svg",
    },
    {
      title: "Reporte de Abuso Sexual Infantil",
      link: "https://report.iwf.org.uk/do/",
      icon: "/svg/logos/portals/iwf.svg",
    },
    {
      title: "Centro Nacional de Ciberseguridad",
      link: "https://cncs.gob.do",
      icon: "/svg/logos/portals/cncs.svg",
    },
  ];

  const routes = [
    { title: "Inicio", link: "/", type: "link" },
    {
      title: "Nosotros",
      type: "menu",
      content: [
        {
          title: "Quienes somos",
          link: "/#",
        },
        {
          title: "Historia",
          link: "/#",
        },
        {
          title: "Organigrama",
          link: "/#",
        },
        {
          title: "Despacho del rector",
          link: "/#",
        },
        {
          title: "Marco legal",
          link: "/#",
        },
      ],
    },
    {
      title: "Oferta Académica",
      type: "menu",
      content: [
        {
          title: "Posgrado",
          link: "/#",
        },
        {
          title: "Educación Continua",
          link: "/#",
        },
        {
          title: "Admisiones",
          link: "/#",
        },
        {
          title: "Biblioteca",
          link: "/#",
        },
        {
          title: "Becas",
          link: "/#",
        },
      ],
    },
    {
      title: "Estudiantes",
      type: "menu",
      content: [
        {
          title: "Aula Virtual",
          link: "https://aulavirtual.inst.prodominicana.gob.do",
        },
        {
          title: "Autoservicio",
          link: "https://prodominicana.probusrd.com",
        },
      ],
    },
    { title: "Noticias", link: "/#", type: "link" },
    { title: "Transparencia", link: "/#", type: "link" },
    { title: "Contacto", link: "/#", type: "link" },
    { title: "Solicita tu admisión", link: "/", type: "button" },
  ];

  return (
    <section className="xl:hidden">
      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-11/12 h-24 flex justify-between items-center">
          <div className="w-6/12 h-full flex items-center">
            <Image
              alt=""
              width={1920}
              height={1080}
              src={"/institutoProdominicana.svg"}
              className="w-56 cursor-pointer"
            />
          </div>
          <div className="w-6/12 h-full flex space-x-2 sm:space-x-4 items-center justify-end">
            <IconButton
              className="bg-red-700 rounded-full w-8 h-8"
              placeholder={undefined}
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </IconButton>
            <div className="w-[2px] h-2/6 bg-gray-300 rounded-full"></div>
            <button onClick={toggleOpen}>
              <Bars3Icon className="w-8 h-8 text-blue-950" />
            </button>
          </div>
        </div>
      </div>
      <Collapse open={open} className="px-5 bg-white">
        <button
          className="w-full h-12 flex items-center justify-between "
          onClick={toggleMenuOpen}
        >
          <div className="flex flex-row space-x-4 justify-center items-center">
            <Image
              alt=""
              width={50}
              height={50}
              src={"/svg/icons/appsIcon.svg"}
              className="w-8 cursor-pointer"
            />

            <h1>Enlaces de interés</h1>
          </div>
          <div>
            <ChevronRightIcon
              className={`${
                menuOpen ? "rotate-90 duration-300" : "rotate-0 duration-300"
              } rotate-0 w-5 h-5`}
            />
          </div>
        </button>
        <Collapse open={menuOpen} className={`w-full flex-col`}>
          <div>
            <ToolsMenuCollapse title={"Portales"} content={portalsListItems} />
          </div>
        </Collapse>
        {routes.map(({ title, link, type, content }, index) => (
          <div key={index}>
            {type === "link" ? (
              <NavbarLinkMobile title={title} link={link || "/"} />
            ) : (
              <>
                {type === "menu" ? (
                  <NavbarCollapseMobile title={title} content={content || []} />
                ) : (
                  <>
                    {type === "button" ? (
                      <NavbarButtonMobile title={title} link={link || "/"} />
                    ) : null}
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </Collapse>
    </section>
  );
}
