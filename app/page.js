import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Feature from "./component/Feature";
import Problem from "./component/Problem";
import Solution from "./component/Solution";
import PlantPalLandingPage from "./component/Page";
import Cta from "./component/Cta";
import Footer from "./component/Footer";

export default function Home() {
  return (
    
    <>
    <Header />
    <main>
      <Hero />
      <Feature />
      <Problem />
      <Solution />
      <PlantPalLandingPage />
      {/* <Image /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Cta />
    </main>
    <Footer />
  </>
  );
}
