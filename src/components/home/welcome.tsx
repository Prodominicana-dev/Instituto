import React from "react";
import WelcomeCard from "../cards/welcomeCard";

import {
  BriefcaseIcon,
  AcademicCapIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="w-full h-[60vh] bg-gradient-to-br from-blue-800 to-blue-900 flex flex-col gap-8 justify-center items-center"
    >
      <h1 className="font-light text-4xl">
        Bienvenido al Instituto ProDominicana
      </h1>
      <p className="font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="grid grid-cols-4 gap-5 justify-center items-center">
        <WelcomeCard
          color="bg-cyan-600"
          title="GRADUACIONES"
          description="90%"
          icon={<AcademicCapIcon className="size-12 fill-white/60" />}
        />
        <WelcomeCard
          color="bg-green-600"
          title="POSTGRADOS"
          description="20+"
          icon={<BriefcaseIcon className="size-12 fill-white/60" />}
        />
        <WelcomeCard
          color="bg-lime-800"
          title="AULAS"
          description="60+"
          icon={<HomeModernIcon className="size-12 fill-white/60" />}
        />
        <WelcomeCard
          color="bg-purple-600"
          title="ESTUDIANTES"
          description="1234"
          icon={<UserIcon className="size-12 fill-white/60" />}
        />
      </div>
    </section>
  );
}
