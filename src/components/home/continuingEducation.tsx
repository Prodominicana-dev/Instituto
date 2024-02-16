"use client";
import React, { useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import EducationCard from "../cards/continuingEducationCard";
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

export default function ContinuingEducationSection() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5);
  }, []);
  const data = [
    {
      title: "Curso especializado Liderazgo, Creatividad e Innovación",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/teacher.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
    {
      title: "Curso especializado en Derecho Constitucional",
      date: "15 de marzo, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "",
      image: "/images/lawyer.jpg",
    },
  ];
  return (
    <section className="w-full py-10 lg:py-0 lg:min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-10/12 h-5/6 flex flex-col items-center gap-5">
        <h1 className="w-full text-center gap-3 lg:gap-8 font-bold text-black text-2xl lg:text-4xl xl:text-5xl">
          Educación Continuada
        </h1>
        <p className="w-full lg:w-8/12  text-center xl:text-xl text-gray-400 ">
          Potencia tu aprendizaje con nuestra oferta de educación continua.
          ¡Explora oportunidades para crecer profesionalmente y alcanzar tus
          metas académicas!
        </p>

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
                  <EducationCard
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
