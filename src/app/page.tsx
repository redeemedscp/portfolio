import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <MobileNav />
      <Sidebar />
      <main className="lg:ml-[380px] xl:ml-[420px]">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  );
}
