import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Testimonial from "@/components/Testimonial";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import DataSciencePortfolio from "@/components/DataSciencePortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Testimonial />
        <Education />
        <Projects />
        <DataSciencePortfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
