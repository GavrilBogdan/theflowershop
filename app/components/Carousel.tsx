"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function CenteredCarousel() {
  const slides = [
    "/images/flower1.jpeg",
    "/images/flower2.jpeg",
    "/images/flower3.jpeg",
    "/images/flower4.jpeg",
    "/images/flower5.jpeg",
    "/images/flower6.jpeg",
    "/images/flower7.jpeg",
    "/images/flower8.jpeg",
    "/images/flower9.jpeg",
  ];

  return (
    <div className="w-full flex justify-center flex-col gap-5 mt-[25rem] mb-[10rem] md:mt-0 ">
      <div className="w-full flex justify-center p-3">
        <h1 className=" text-center w-fit border-pink-400 border-2 px-2 py-1 rounded-xl shadow-[0_0_16px_5px_rgba(255,255,255,0.2)] text-white font-bold text-xl">
          Cateva din lucrarile noastre
        </h1>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="
  max-w-[1200px] w-full
  [&_.swiper-button-prev]:!hidden [&_.swiper-button-next]:!hidden
  md:[&_.swiper-button-prev]:!block md:[&_.swiper-button-next]:!block
"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i} className="!flex justify-center items-center">
            <div className="relative w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] md:w-[380px] md:h-[460px]">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
