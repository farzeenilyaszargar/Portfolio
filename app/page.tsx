import Experience from "@/comp/experience";
import Footer from "@/comp/footer";
import Hero from "@/comp/hero";
import Navbar from "@/comp/navbar";
import Projects from "@/comp/projects";
import Skills from "@/comp/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center ">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
