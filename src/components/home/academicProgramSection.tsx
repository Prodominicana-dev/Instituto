"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "../swiperjs/swiper";
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AcademicProgramCard from "../cards/academicProgramCard";

export default function AcademicProgramSection() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5);
  }, []);
  const data = [
    {
      title: "Especialidad en Gestión de Operaciones de Exportación",
      date: "15 de marzo, 2024",
      description:
        "Optimiza el éxito en exportaciones con nuestra Especialidad en Gestión de Operaciones. Domina estrategias clave para liderar en el mercado global.",
      link: "",
      image: "/images/teacher.jpg",
    },
    {
      title: "Maestría en Comercio Exterior e Inversión Extranjera Directa",
      date: "15 de marzo, 2024",
      description:
        "Destaca en el comercio global con la Maestría en Comercio Exterior e Inversión Extranjera Directa. Adquiere habilidades estratégicas para liderar en entornos internacionales y transforma tu carrera hoy.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title:
        "Maestría en Finanzas Internacionales y Estrategias de Inversión Global",
      date: "15 de marzo, 2024",
      description:
        "Adquiere conocimientos avanzados en finanzas internacionales y desarrolla habilidades estratégicas para gestionar inversiones en un contexto global. Destaca en el mundo financiero globalizado con esta maestría de vanguardia.",
      link: "",
      image: "/images/lawyer.jpg",
    },
  ];
  return (
    <section className="w-full flex justify-center items-center bg-trueGray-100 lg:p-20 p-10">
      <div className="w-full lg:w-10/12 flex flex-col justify-center text-center space-y-10">
        <div className="space-y-5">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl text-black font-bold">
            Nuestra Oferta Académica de postgrado
          </h1>
          <p className="xl:text-xl text-gray-400">
            Tu viaje educativo comienza aquí
          </p>
        </div>
        <div className="w-full">
          {!loading && (
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              initialSlide={0}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 50 },
              }}
            >
              {data.map(({ title, description, date, link, image }, index) => (
                <SwiperSlide key={index}>
                  <AcademicProgramCard
                    title={title}
                    date={date}
                    description={description}
                    link={link}
                    image={image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
