import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { BlogSection } from "@/components/sections/BlogSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // If the path is something like "/about", scroll to the element with id="about"
    const path = location.pathname.replace("/", "");
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <BlogSection />
      <Contact />
    </main>
  );
}
