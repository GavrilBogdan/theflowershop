"use client";
import React from "react";
import AnimatedButton from "./Button";
import AnimatedButton1 from "./Button1";
import Image from "next/image";
import Link from "next/link";

const handleScroll = () => {
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Hero = () => {
  return (
    <section
      id="home"
      className="text-white font-bold h-screen justify-center flex items-center text-center flex-col"
    >
      <Image
        src="/images/flowers.png"
        alt="Roses"
        fill
        className="absolute -z-10 object-cover opacity-15"
      />

      <div>
        <p className="text-gray-400 text-2xl">Welcome to,</p>
        <h1
          className="sm:text-6xl text-3xl"
          style={{ fontFamily: "Montserrat,sans-serif" }}
        >
          The<span className="text-pink-700">Flower</span>Shop
        </h1>
        <p
          className="text-pink-400 text-sm"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          ~ florarie ~
        </p>
        <p className="text-gray-300 text-lg">discover our products </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-15">
        <AnimatedButton
          text="Descopera"
          className="mt-2"
          onClick={handleScroll}
        />
        <Link href="/contact">
          <AnimatedButton1 text="Location 📍" className="mt-2" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
