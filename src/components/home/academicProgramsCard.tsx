"use client";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface props {
  title: string;
  date: string;
  image: string;
  link: string;
}

export default function AcademicProgramsCard({
  title,
  date,
  image,
  link,
}: props) {
  return (
    <Card
      placeholder={undefined}
      className="max-w-[24rem] overflow-hidden h-full rounded-md hover:shadow-lg duration-300 justify-self-center"
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
          className="object-cover h-full"
        />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        className="flex flex-col item-center h-full max-h-[16rem] justify-between"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-1 text-blue-gray-500">
            <CalendarDaysIcon className="w-5" />
            <p className="text-xs">{date}</p>
          </div>
          <div className="text-start text-blue-950 text-2xl font-bold line-clamp-4">
            {title}
          </div>
        </div>
        <Button
          placeholder={undefined}
          className="bg-crimsonRed text-white rounded-sm"
        >
          Ver mas
        </Button>
      </CardBody>
    </Card>
  );
}
