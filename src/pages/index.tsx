import About from "@/components/about";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import { Inter } from "next/font/google";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Certificates from "@/components/certificates";
import Sosmed from "@/components/sosmed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center bg-gray-50 px-4 md:px-8 dark:bg-gray-800 ${inter.className}`}
    >
      <Intro />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Sosmed />
      <Contact />
    </main>
  );
}
