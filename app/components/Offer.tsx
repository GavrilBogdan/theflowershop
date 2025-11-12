import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Offer = () => {
  return (
    <section className="min-h-screen flex flex-col items-center text-center w-full mt-[5rem] sm:-mt-[3rem]">
      <div className="p-5 flex justify-center">
        <div className="bg-gradient-to-b from-[#700202] to-[#F8A5FF] p-[5rem] rounded-3xl relative w-fit">
          <Image
            src="/images/white_flower.png"
            alt=""
            fill
            className="absolute z-10 object-contain opacity-15"
          />
          <div className="flex flex-col">
            <div className="flex justify-center flex-col items-center gap-3">
              <h1
                className={`font-bold text-lg text-white py-2 px-5 bg-white/30 rounded-4xl w-fit ${montserrat.className}`}
              >
                STII DEJA CE ITI DORESTI?
              </h1>
              <p className={`text-white ${montserrat.className}`}>
                TRANSFORMA-TI IDEEA IN REALITATE
              </p>
              <h1 className="font-bold text-white text-lg">3 PASI SIMPLI</h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-15 justify-center mt-2">
              <div className="bg-white/20 p-5 rounded-3xl flex-1 gap-3">
                <h1 className="text-lg font-bold text-white">PASUL 1</h1>
                <p className="text-white">
                  Spune-ne ce ți-ai imaginat, iar noi îți vom crea aranjamentul
                  perfect. Fie că e vorba de un buchet special, un cadou rafinat
                  sau o ocazie deosebită, suntem aici să îți aducem visul mai
                  aproape.
                </p>
              </div>
              <div className="bg-white/30 p-5 rounded-3xl flex-1 gap-3">
                <h1 className="text-lg font-bold text-white">PASUL 2</h1>
                <p className="text-white">
                  După ce definim stilul și bugetul, florarii noștri se ocupă de
                  fiecare detaliu. Alegem florile potrivite și îți trimitem
                  confirmări, pentru ca rezultatul să fie exact așa cum ți-ai
                  imaginat.
                </p>
              </div>
              <div className="bg-white/40 p-5 rounded-3xl flex-1 gap-3">
                <h1 className="text-lg font-bold text-white">PASUL 3</h1>
                <p className="text-white">
                  agia prinde viață! Aranjamentul ajunge la tine proaspăt,
                  elegant și pregătit să impresioneze. Bucură-te de zâmbete și
                  surprinde-i pe cei dragi cu o experiență florală desăvârșită.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
