import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Testimonial from "@/components/Testimonial";
import Education from "@/components/Education";
import Writing from "@/components/Writing";
import Projects from "@/components/Projects";
import DataSciencePortfolio from "@/components/DataSciencePortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-3xl mx-auto px-6 md:px-8 lg:px-0">
        <Hero />
        <About />
        <section id="work">
          <Experience />
          <Projects />
        </section>
        <Testimonial />
        <Writing />
        <section id="credentials">
          <Education />
          <DataSciencePortfolio />
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
