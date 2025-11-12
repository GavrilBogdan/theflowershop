import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-800 h-fit p-5 text-white flex flex-col sm:flex-row items-center justify-evenly gap-5">
      <div className="flex sm:gap-5 flex-col">
        <h1 className="font-bold text-2xl border-b-4 border-purple-500 inline-block pb-2">
          Contact
        </h1>
        <p className="font-bold text-xl cursor-pointer">
          Tel.{" "}
          <span className="hover:underline-animation-b font-normal">
            0757 426 408
          </span>
        </p>
        <p className="font-bold text-xl cursor-pointer">
          Email{" "}
          <span className="hover:underline-animation-b font-normal">
            theflowershoptm@gmail.com
          </span>
        </p>
        <div className="font-bold text-xl cursor-pointer">
          Orar{" "}
          <span className="font-normal flex flex-col">
            <p className="hover:underline-animation-b w-fit">
              Luni-Vineri - 10:00-20:00
            </p>
            <p className="hover:underline-animation-b w-fit">
              Sambata - 10:00-14:00
            </p>
            <p className="hover:underline-animation-b w-fit">
              Duminica - Inchis
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:gap-5 p-5">
        <h1 className="font-semibold text-sm sm:text-xl cursor-pointer">
          Pentru informații suplimentare sau <br />
          asistență personalizată, vă stăm cu drag la dispoziție.
        </h1>
        <p className="font-semibold sm:text-lg cursor-pointer text-[#FDF6F0]">
          Ⓒ2025 TheFlowerShop| Toate drepturile rezervate.
        </p>
        <p>
          Website built by{" "}
          <a
            href="https://wa.me/0736810678"
            className="hover:underline-animation-b"
          >
            Gavril Bogdan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
