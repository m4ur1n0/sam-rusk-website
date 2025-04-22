import AboutMe from "@/components/AboutMe";
import AdditionalReferences from "@/components/AdditionalReferences";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";
import FilmProjects from "@/components/FilmProjects";
import Name from "@/components/Name";
import NavBar from "@/components/NavBar";
import Resume from "@/components/Resume";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <div className="sam-rusk-entire-page w-screen flex flex-col h-full px-32 py-24">
      <Name />

      <NavBar />

      <AboutMe id="about" />

      <FilmProjects id="film-projects" />

      <Resume  id="resume" />

      <AdditionalReferences/>

      <Writing id="writing" />

      <Contact id="contact" />

      <Copyright />
    </div>  
  );
}
