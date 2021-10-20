import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import SocialSideBar from "./components/sidebar/SocialSideBar";
import Projects from "./components/projects/Projects";
import EmailSideBar from "./components/sidebar/EmailSideBar";
import About from "./components/about/About";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900 main-container">
      <SocialSideBar />
      <EmailSideBar />
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
