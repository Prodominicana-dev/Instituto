"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  PhotoIcon,
  ScaleIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Select } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarMenu from "./navbarMenu";
import ToolsMenu from "./toolsMenu";
import NavbarLink from "./navbarLink";
import NavbarButton from "./navbarButton";
import GovPagesInfo from "./govPagesInfo";

export default function Navbar() {
  const aboutListItems = [
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
  ];

  const servicesListItems = [
    {
      title: "2",
      link: "/#",
    },
    {
      title: "1",
      link: "/#",
    },
  ];

  return (
    <nav className="hidden xl:block">
      <GovPagesInfo />
      <div className="h-24 w-full bg-white flex justify-center">
        <div className="flex items-center justify-between w-10/12">
          <Image
            alt=""
            width={1920}
            height={1080}
            src={"/prodominicana.svg"}
            className="w-56 cursor-pointer"
          />
          <div className="flex flex-col space-y-4 w-2/12 ">
            <div className="w-full flex items-center justify-center gap-4">
              <div className="h-12 w-10/12 border-2 border-blue-950 rounded-full p-2 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="h-full w-8/12 text-blue-950 bg-white outline-none pl-2"
                />
                <IconButton
                  className="bg-red-700 rounded-full w-8 h-8"
                  placeholder={undefined}
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </IconButton>
              </div>
              <ToolsMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-crimsonRed flex justify-center ">
        <div className="w-10/12 flex  items-center">
          <div className="flex flex-wrap w-full h-full justify-center">
            <Link
              href={"/"}
              className="w-20 border-b-2 border-white flex justify-center items-center"
            >
              <HomeIcon className="w-8 cursor-pointer" />
            </Link>

            <NavbarMenu
              title={"Sobre Nosotros"}
              navListMenuItems={aboutListItems}
            />
            <NavbarMenu
              title={"Servicios"}
              navListMenuItems={servicesListItems}
            />
            <NavbarLink title={"Admisiones"} link={"/#"} />
            <NavbarLink title={"Noticias"} link={"/#"} />
            <NavbarLink title={"Contacto"} link={"/#"} />
            <NavbarLink title={"Transparencia"} link={"/#"} />
            <div className="h-10 flex space-x-3 text-white self-center">
              <NavbarButton title={"Inicia tu admisión"} link={"/#"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
