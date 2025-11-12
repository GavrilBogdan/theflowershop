import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="text-white mx-auto h-screen justify-center flex items-center text-center mt-[20rem] sm:mt-0 mb-5"
    >
      <div className="flex mx-auto sm:flex-row flex-col gap-15 px-2 sm:px-10">
        <div className="bg-white/15 p-5 rounded-2xl flex flex-1 flex-col gap-4 relative">
          <Image
            src="/images/pink_flower.png"
            alt=""
            fill
            className="absolute -z-10 object-cover opacity-15"
          />
          <h1
            className="text-4xl text-pink-50 font-bold"
            style={{ fontFamily: "'Cookie',sans-serif" }}
          >
            Despre noi
          </h1>
          <p
            className="text-2xl/6   text-pink-50 "
            style={{ fontFamily: "'Cookie', cursive" }}
          >
            Suntem o florărie locală pasionată de frumusețea naturii și de
            puterea pe care o au florile de a transmite emoție. Credem că
            fiecare buchet spune o poveste, iar noi suntem aici să o facem
            memorabilă.
          </p>
        </div>
        <div className="bg-white/15 p-5 rounded-2xl flex flex-1 flex-col gap-4 relative">
          <Image
            src="/images/red_flower.png"
            alt=""
            fill
            className="absolute -z-10 object-cover opacity-15"
          />
          <h1
            className="text-4xl text-pink-50 font-bold"
            style={{ fontFamily: "'Cookie',sans-serif" }}
          >
            Povestea noastra
          </h1>
          <p
            className="text-2xl/6   text-pink-50 "
            style={{ fontFamily: "'Cookie', cursive" }}
          >
            Totul a început din dragoste pentru culoare și parfum. Am pornit ca
            un atelier mic, iar astăzi continuăm să creăm aranjamente care să
            aducă bucurie în casele oamenilor. Ne inspirăm din fiecare anotimp,
            din oameni și din poveștile lor.
          </p>
        </div>
        <div className="bg-white/15 p-5 rounded-2xl flex flex-1 flex-col gap-4 relative">
          <Image
            src="/images/blue_flower.png"
            alt=""
            fill
            className="absolute -z-10 object-cover opacity-15"
          />
          <h1
            className="text-4xl text-pink-50 font-bold"
            style={{ fontFamily: "'Cookie',sans-serif" }}
          >
            Valorile Noastre
          </h1>
          <p
            className="text-2xl/6   text-pink-50 "
            style={{ fontFamily: "'Cookie', cursive" }}
          >
            Punem accent pe calitate, atenție la detalii și prospețime. Ne
            alegem furnizorii cu grijă și creăm fiecare aranjament ca pe o mică
            operă de artă, personalizată pentru tine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
