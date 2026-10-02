import ScrollCar from "@/components/ScrollCar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Road from "@/components/Road";
import Stack from "@/components/Stack";
import Garage from "@/components/Garage";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <main className="page">
      <ScrollCar />
      <Nav />
      <Hero />
      <Marquee />
      <Road />
      <Stack />
      <Garage />
      <Footer />
      <RevealObserver />
    </main>
  );
}
