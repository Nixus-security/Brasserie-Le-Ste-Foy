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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee text="Brasserie" separator=" · " speed={35} />
      <About />
      <ChefSpecial />
      <Marquee text="La Carte" separator=" — " speed={25} dark />
      <Menu />
      <Gallery />
      <Marquee text="Témoignages" separator=" · " speed={30} dark />
      <Testimonials />
      <Hours />
      <Contact />
      <Footer />
    </main>
  );
}
