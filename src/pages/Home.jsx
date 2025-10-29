import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skill from "../components/Skills";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#0A192F] min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skill/>
      <Process/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* Other sections */}
    </div>
  );
}

export default Home;
