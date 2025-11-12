"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const images = [
  "/images/flower1.jpeg",
  "/images/flower2.jpeg",
  "/images/flower3.jpeg",
  "/images/flower4.jpeg",
  "/images/flower5.jpeg",
  "/images/flower1.jpeg",
  "/images/flower2.jpeg",
  "/images/flower3.jpeg",
  "/images/flower4.jpeg",
  "/images/flower5.jpeg",
  "/images/flower1.jpeg",
  "/images/flower2.jpeg",
  "/images/flower3.jpeg",
  "/images/flower4.jpeg",
  "/images/flower5.jpeg",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full py-16">
      <Link href="/">
        <div className="p-3 relative -top-15 left-1 sm:top-0 sm:left-0 sm:absolute">
          <button className="text-white font-bold px-4 py-2 border-1 rounded-2xl cursor-pointer hover:bg-indigo-600 transition duration-200 hover:border-indigo-900">
            Inapoi
          </button>
        </div>
      </Link>
      <div className="w-full flex justify-center">
        <h2
          className={`${montserrat.className} text-center text-2xl text-white mb-10 bg-white/30 w-fit px-3 py-2 rounded-3xl`}
        >
          Cateva dintre lucrarile noastre
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-52 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${i}`}
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
}
