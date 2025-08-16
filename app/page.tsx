import Baner from "@/components/Baner";
import Hero from "@/sections/Hero";
import NavBar from "@/components/NavBar";
import Products from "@/sections/Products";
import AboutUs from "@/sections/AboutUs";
import SolutionServices from "@/sections/SolutionServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <NavBar />
        <section className=" h-[100vh]">
          <Hero />
        </section>
        <section className="">
          <Baner />
          <Products />
        </section>
        <section className="">
          <AboutUs />
        </section>
        <section className="">
          <SolutionServices />
        </section>
        <Footer/>
      </div>

    </>
  );
}
