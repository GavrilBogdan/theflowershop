"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden py-[10rem] sm:py-0 relative">
      <Link href="/">
        <div className="p-3 relative -top-25 left-5 sm:top-0 sm:left-0 sm:absolute">
          <button className="text-white font-bold px-4 py-2 border-1 rounded-2xl cursor-pointer hover:bg-indigo-600 transition duration-200 hover:border-indigo-900">
            Inapoi
          </button>
        </div>
      </Link>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row">
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <div className="border-1 border-gray-400 p-8 rounded-xl text-white flex font-bold bg-gray-500/10 backdrop-blur-3xl flex-col  text-center gap-5 items-center justify-center shadow-[0_0_16px_5px_rgba(255,255,255,0.3)]">
            <h1 className="text-3xl">Cum putem lua legatura?</h1>
            <div className="flex flex-col gap-4">
              <p>
                📧 Email
                <span className="ml-2 cursor-pointer hover:underline-animation-a  ">
                  theflowershoptm@gmail.com
                </span>
              </p>
              <p>
                📱 Tel.
                <span className="ml-2 cursor-pointer  hover:underline-animation-a  ">
                  0757 426 408
                </span>
              </p>
              <p>
                💬 Whatsapp
                <span className="ml-2 cursor-pointer  hover:underline-animation-a  ">
                  <a href="https://wa.me/0757426408">Click aici!</a>
                </span>
              </p>
            </div>
            <button className="p-5 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-900 w-fit cursor-pointer hover:scale-105">
              📩 Plaseaza o comanda
            </button>
            <div className="flex flex-row gap-5">
              <a
                className="p-3 rounded-full bg-gray-500/30 cursor-pointer hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
                href="https://www.facebook.com/theflowershoptm"
                target="_blank"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                className="p-3 rounded-full bg-gray-500/30 cursor-pointer hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
                href="https://www.instagram.com/theflowershoptm/"
                target="_blank"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[450px] h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.2808292186678!2d21.2396318!3d45.7398849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d278ed01359%3A0x1c64ebebb89a5af7!2sThe%20Flower%20Shop!5e0!3m2!1sro!2sro!4v1762764410212!5m2!1sro!2sro"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl shadow-[0_0_16px_5px_rgba(255,255,255,0.2)]"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
