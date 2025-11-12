"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start loading on route change
    setLoading(true);

    // Hide after animation (stroke-draw + fade)
    const t = setTimeout(() => setLoading(false), 2000); // total duration
    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <svg
        width="500"
        height="150"
        viewBox="0 0 600 200"
        className="logo-stroke"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="logo-text"
        >
          TheFlowerShop
        </text>
      </svg>
    </div>
  );
}
