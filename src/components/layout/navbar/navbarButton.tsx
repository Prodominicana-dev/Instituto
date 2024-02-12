"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

interface props {
  title: string;
  link: string;
  className?: string;
}

export default function NavbarButton({ title, link, className }: props) {
  return (
    <Link
      href={link}
      className={`flex w-full justify-center items-center bg-lightBlue-500 bg-lig py-2 rounded-full uppercase ${className}}`}
    >
      <Typography
        placeholder={undefined}
        className="text-white hover:text-white/60 duration-300 text-xs p-5 font-bold font-montserrat "
      >
        {title}
      </Typography>
    </Link>
  );
}
