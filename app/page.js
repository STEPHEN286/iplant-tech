import Image from "next/image";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import PlantPalLandingPage from "../components/Page";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Problem />
      <Solution />
      <PlantPalLandingPage />
      {/* <Image /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Cta />
    </>
  );
}
