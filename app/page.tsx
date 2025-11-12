import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OnPageGallery from "./components/OnPageGallery";
import Image from "next/image";
import Footer from "./components/Footer";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <OnPageGallery />
        <Offer />
        <Footer />
      </main>
    </>
  );
}
