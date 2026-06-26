import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChefSpecial from "@/components/ChefSpecial";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Actualite from "@/components/Actualite";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee text="Brasserie · Ste Foy · Tradition · Chaleureux · Fait Maison · Terroir · Convivial" separator=" — " speed={140} />
      <Actualite />
      <About />
      <ChefSpecial />
      <Menu />
      <Gallery />
      <Testimonials />
      <Hours />
      <Contact />
      <Footer />
    </main>
  );
}
