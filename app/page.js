import Image from "next/image";
import Hero from "./component/Hero";
import Feature from "./component/Feature";
import Problem from "./component/Problem";
import Solution from "./component/Solution";
import PlantPalLandingPage from "./component/Page";
import Cta from "./component/Cta";

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
