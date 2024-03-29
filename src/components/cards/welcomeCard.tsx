"use client";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function WelcomeCard({
  title,
  color,
  description,
  icon,
}: {
  title: string;
  color: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`w-full md:w-80 h-28 md:h-40 ${color} text-white rounded-sm flex flex-col justify-center gap-5 items-center`}
    >
      <div className="flex gap-2 justify-center items-center w-10/12">
        <h1 className="font-light text-base text-start lg:text-lg truncate w-10/12 text-white lg:w-10/12">
          {title}
        </h1>
        <div className="w-2/12">{icon}</div>
      </div>
      <p className="text-3xl font-normal text-white w-10/12">{description}</p>
    </div>
  );
}
