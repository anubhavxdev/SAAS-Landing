import './index.css'
import Hero from "../src/components/mvpblocks/gradient-hero";
import Features from "../src/components/mvpblocks/feature-2";
import Pricing from "../src/components/mvpblocks/designer-pricing";
import TestimonialsCarousel from "../src/components/mvpblocks/testimonials-carousel";
import FAQ from "../src/components/mvpblocks/faq-3";
// import CTA from "../src/components/mvpblocks/cta-2";
// import Contact from "../src/components/mvpblocks/contact-us-1";


const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <TestimonialsCarousel />
      <FAQ />
      {/* <CTA /> */}
      {/* <Contact /> */}

    </div>
  )
}

export default App
