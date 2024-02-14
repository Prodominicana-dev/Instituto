"use client";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface props {
  title: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

export default function EducationCard({
  title,
  date,
  image,
  description,
  link,
}: props) {
  return (
    <div className="p-5">
      <Card
        placeholder={undefined}
        className="max-w-[30rem] overflow-hidden h-full rounded-md hover:shadow-lg duration-300 group"
      >
        <CardHeader
          placeholder={undefined}
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-full max-h-3/6"
        >
          <Image
            width={1920}
            height={1080}
            src={image}
            alt={title}
            className="object-cover h-full group-hover:scale-110 duration-300 transform"
          />
        </CardHeader>
        <CardBody
          placeholder={undefined}
          className="flex flex-col gap-4 item-center h-full max-h-[24rem] justify-between"
        >
          <div className="flex items-center space-x-1 text-blue-gray-500">
            <CalendarDaysIcon className="w-5" />
            <p className="text-xs">{date}</p>
          </div>
          <div className="text-start text-blue-950 text-2xl font-bold line-clamp-2">
            {title}
          </div>
          <div className="text-start text-gray-500 text-sm font-normal line-clamp-3">
            {description}
          </div>
          <div className="w-full flex flex-row justify-between">
            <button className="bg-red-500 flex justify-center items-center text-white text-sm w-36 h-10 rounded-md">
              Conoce más
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
