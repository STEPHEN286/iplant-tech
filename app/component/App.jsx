'use client'


import Cta from "./components/CTA"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Image from "./components/Image"
import Pricing from "./components/Pricing"
import Problem from "./components/Problem"
import Solution from "./components/Solution"
import Testimonial from "./components/Testimonial"
import PlantPalLandingPage from "./components/Page"


function App() {


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
  )
}

export default App
