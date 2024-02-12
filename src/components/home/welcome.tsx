import React from "react";
import WelcomeCard from "../cards/welcomeCard";

import {
  BriefcaseIcon,
  AcademicCapIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="w-full h-screen lg:h-[60vh] bg-gradient-to-b from-blue-600 to-blue-950 flex justify-center items-center"
    >
      <div className="w-11/12 lg:w-full gap-3 lg:gap-8 flex flex-col  justify-center items-center">
        <h1 className="font-light text-2xl lg:text-4xl">
          Bienvenido al Instituto ProDominicana
        </h1>
        <p className="font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="w-full grid grid-grid-cols-1 lg:grid-cols-4 gap-5 justify-center items-center">
          <WelcomeCard
            color="bg-lightBlue-500"
            title="GRADUACIONES"
            description="90%"
            icon={
              <AcademicCapIcon className="size-6 lg:size-12 fill-white/60" />
            }
          />
          <WelcomeCard
            color="bg-teal-600"
            title="POSTGRADOS"
            description="20+"
            icon={<BriefcaseIcon className="size-6 lg:size-12 fill-white/60" />}
          />
          <WelcomeCard
            color="bg-lime-500"
            title="AULAS"
            description="60+"
            icon={
              <HomeModernIcon className="size-6 lg:size-12 fill-white/60" />
            }
          />
          <WelcomeCard
            color="bg-fuchsia-600"
            title="ESTUDIANTES"
            description="1234"
            icon={<UserIcon className="size-6 lg:size-12 fill-white/60" />}
          />
        </div>
      </div>
    </section>
  );
}
