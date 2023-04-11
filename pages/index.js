import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll">
      <Head>
        <title>Zwelihle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
