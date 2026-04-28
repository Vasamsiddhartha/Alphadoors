import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesCarousel from "./components/ServicesCarousel";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesCarousel />
        <Features />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
