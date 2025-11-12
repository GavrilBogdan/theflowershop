"use client";
import React from "react";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton1({
  text,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex-1 inline-block min-w-fit px-3 py-3 border-2 border-t-pink-500 border-r-pink-400 border-b-pink-400 border-l-pink-500 text-white font-bold text-sm rounded-lg overflow-hidden cursor-pointer ${className}`}
    >
      {text}
      {/* Background animat */}
      <span className="absolute top-0 left-0 w-0 h-full bg-[#f100e1] transition-all duration-500 group-hover:w-full z-[-1]"></span>
    </button>
  );
}
